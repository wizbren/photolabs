import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import photos from './mocks/photos';
import './App.scss';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: "/Image-1-Regular.jpeg",
  username: "Joe Example",
  profile: "/profile-1.jpg",
};

const threePhotos = photos.slice(0, 3);


const App = () => {
  return (
    <div className="App">
      {threePhotos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default App;