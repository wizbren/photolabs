import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';



const PhotoList = ({ photos, favourites, toggleFavourite, openModal }) => {

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            photo={photo}
            isFavourite={favourites.includes(photo.id)}
            toggleFavourite={toggleFavourite}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList