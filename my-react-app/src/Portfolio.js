import './Portfolio.css';
import React,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Portfolio = () => {
   // State variables for error handling and object data
  const [error, setError] = useState(null);
  const [objectDataList, setObjectDataList] = useState([]);
  const [otherObjectList,setOtherObjectList] = useState([]);
  const navigate = useNavigate();

   // Fetch object data from the Met Museum API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch object IDs
        const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=Hokusai');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        const objectIDs = jsonData.objectIDs;

         // Select 4 random object IDs
        const randomIDs = [];
        while (randomIDs.length < 4) {
          const randomIndex = Math.floor(Math.random() * objectIDs.length);
          const randomID = objectIDs[randomIndex];
          if (!randomIDs.includes(randomID)) {
            randomIDs.push(randomID);
          }
        }

        // Select other object IDs
        const otherIDs = objectIDs.filter(id => !randomIDs.includes(id));
        
        // Fetching object data from randam IDs
        const endpoint = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
        
        const fetchDataPromises = randomIDs.map(async (id) => {
          try {
            const objectResponse = await fetch(endpoint + id);
            if (!objectResponse.ok) {
              throw new Error('Failed to fetch object data');
            }
            return objectResponse.json();
          } catch (error) {
            console.error(`Error fetching object with ID ${id}:`, error);
            return null;
          }
        });
        
        // Fetch object data for other IDs
        const otherFetchDataPromises = otherIDs.map(async (id) => {
          try {
            const objectResponse = await fetch(endpoint + id);
            if (!objectResponse.ok) {
              throw new Error('Failed to fetch object data');
            }
            return objectResponse.json();
          } catch (error) {
            console.error(`Error fetching object with ID ${id}:`, error);
            return null;
          }
        });
        
        //wait until all fetch is done
        const objectDataList = await Promise.all(fetchDataPromises);
        setObjectDataList(objectDataList.filter(data => data !== null));

        const otherObjectDataList = await Promise.all(otherFetchDataPromises);
        setOtherObjectList(otherObjectDataList.filter(data => data !== null));

      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    const selectedObjectId = e.target.value;
    console.log(e.target.value);
    if (selectedObjectId) {
      navigate(`/portfolio/${selectedObjectId}`);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (objectDataList.length <= 3) {
    return <div>Loading...</div>;
  }

 return (

    <div className='portfolio'>
      <h1>Portfolio</h1>
      <div className="border"></div>

       <p>Some of his works (click to see more information)</p>

      <div className='image-container'>
        {objectDataList.map((objectData, index) => (
          <Link key={index} to={`/portfolio/${objectData.objectID}`}>
          <img key={index} src={objectData.primaryImageSmall} alt={`fetch fail ${index}`}></img>
          </Link>
        ))}
      </div>

      <h3>Search other Publications</h3>
      {otherObjectList.length > 0 ? (
        <select className='dropdown' onChange={handleSelectChange}>
          <option hidden>Choose</option>
        {otherObjectList.map((objectData, index) => (
          <option className='options' key={index} value={objectData.objectID}>{objectData.title}</option>
        ))}
      </select>
    ) : (
      <div className='loading'>Loading...</div>
    )}
    </div>
  );
};

export default Portfolio;
  