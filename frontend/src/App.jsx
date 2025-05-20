import React from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';



const App = () => {
  const {
    state,
    updateFavPhotoIds,
    onPhotoSelect,
    closePhotoModal,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        favourites={state.favourites}
        toggleFavourite={updateFavPhotoIds}
        openModal={onPhotoSelect}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {state.showModal && (
        <PhotoDetailsModal
          closeModal={closePhotoModal}
          photo={state.selectedPhoto}
          favourites={state.favourites}
          toggleFavourite={updateFavPhotoIds}
          openModal={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default App;