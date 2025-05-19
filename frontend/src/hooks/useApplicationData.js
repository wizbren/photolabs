import { useState } from "react";
import photos from "../mocks/photos";
import topics from "../mocks/topics";

export const ACTIONS = {
  TOGGLE_FAV_PHOTO: "TOGGLE_FAV_PHOTO",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL"
};


const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const updateFavPhotoIds = (photoId) => {
    setFavourites((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const closePhotoModal = () => {
    setShowModal(false);
  };

  return {
    state: {
      photos,
      topics,
      favourites,
      showModal,
      selectedPhoto
    },
    updateFavPhotoIds,
    onPhotoSelect,
    closePhotoModal
  };
};


export default useApplicationData;