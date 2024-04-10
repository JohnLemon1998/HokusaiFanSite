import './Portfolio.css';
import React,{useState,useEffect} from 'react';

const Portfolio = () => {

  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=Hokusai');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  const [objectData, setObjectData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchObjectData = async () => {
      try {
        // データ取得用のエンドポイント
        const endpoint = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

        // データ取得
        const response = await fetch(endpoint + '45818');
        if (!response.ok) {
          throw new Error('Failed to fetch object data');
        }
        const jsonData = await response.json();
        setObjectData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchObjectData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!objectData) {
    return <div>Loading...</div>;
  }

 return (
    <div>
      {/* objectURLを表示 */}
      <a href={objectData.objectURL} target="_blank" rel="noopener noreferrer">View Object</a>
    </div>
  );
};

export default Portfolio;
  