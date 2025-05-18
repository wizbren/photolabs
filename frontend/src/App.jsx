import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';


const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [showModal, setShowModal] = useState(false)

  const toggleFavourite = (photoId) => {
    setFavourites((previous) => {
      return previous.includes(photoId)
        ? previous.filter((id) => id !== photoId)
        : [...previous, photoId]
    });
  };

  const openModal = () => {
    setShowModal(true)
  };


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite} />
      {showModal && <PhotoDetailsModal />}   {/* This might not be right!!! */}
    </div>
  );
};

export default App;