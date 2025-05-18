import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';


const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    setFavourites((previous) => {
      return previous.includes(photoId)
        ? previous.filter((id) => id !== photoId)
        : [...previous, photoId]
    });
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true)
  };

  const closeModal = () => {
    setShowModal(false)
  };


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
      {showModal && <PhotoDetailsModal closeModal={closeModal} photo={selectedPhoto} />}   {/* This might not be right!!! */}
    </div>
  );
};

export default App;