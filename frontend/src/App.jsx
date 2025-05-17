import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import photos from './mocks/photos';
import './App.scss';



const App = () => {
  const threePhotos = photos.slice(0, 3);

  return (
    <div className="App">
      {threePhotos.map((photo, index) => (
        <PhotoListItem key={index} photo={photo} />
      ))}
    </div>
  );
};

export default App;