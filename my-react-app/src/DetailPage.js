import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css';

const DetailPage = () => {
  const params = useParams();
  const objectID = params.id;

  const [objectData, setObjectData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchObjectData = async () => {
      try {
        
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch object data');
        }
        const jsonData = await response.json();
        setObjectData(jsonData);
        console.log(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchObjectData();
  }, [objectID]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!objectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='DetailPage-container'>
      <h2>{objectData.title}</h2>
      
    <div className='info-container'>
      <div className='info-left'>
        <img src={objectData.primaryImageSmall} alt={objectData.title} />
      </div>

      <div className='info-right'>
          <p>Culture : {objectData.culture}</p>
          <p>Object Type : {objectData.objectName}</p>
          <p>Created at : {objectData.objectBeginDate}</p>
          <p>Heiht : {objectData.measurements[0].elementMeasurements.Height} cm</p>
          <p>Width : {objectData.measurements[0].elementMeasurements.Width} cm</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
