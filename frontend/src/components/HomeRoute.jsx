import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss'


const HomeRoute = ({ photos, topics, favourites, toggleFavourite, openModal, fetchPhotosByTopic }) => {

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favourites={favourites}
        onTopicClick={fetchPhotosByTopic}
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
    </div>
  );
};


export default HomeRoute;