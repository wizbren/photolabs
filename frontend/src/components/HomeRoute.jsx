import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss'


const HomeRoute = ({
  photos,
  topics,
  favourites,
  toggleFavourite,
  openModal,
  fetchPhotosByTopic,
  viewFavourites,
  toggleFavList
}) => {

  const filteredPhotos = viewFavourites
    ? photos.filter(photo => favourites.includes(photo.id))
    : photos;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favourites={favourites}
        onTopicClick={fetchPhotosByTopic}
      />
      <PhotoList
        photos={filteredPhotos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
    </div>
  );
};


export default HomeRoute;