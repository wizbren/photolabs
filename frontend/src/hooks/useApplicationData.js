import { useReducer, useEffect } from "react";



export const ACTIONS = {
  TOGGLE_FAV_PHOTO: "TOGGLE_FAV_PHOTO",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA"
};

const initialState = {
  photos: [],
  topics: [],
  favourites: [],
  showModal: false,
  selectedPhoto: null
};


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV_PHOTO: {
      const photoId = action.photoId;
      const favourites = state.favourites.includes(photoId)
        ? state.favourites.filter(id => id !== photoId)
        : [...state.favourites, photoId];
      
      return {...state, favourites};
    }

    case ACTIONS.SELECT_PHOTO:
      return {...state, selectedPhoto: action.photo, showModal: true};

    case ACTIONS.CLOSE_MODAL:
      return {...state, showModal: false};

    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photos: action.photos};
  }
}


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateFavPhotoIds = (photoId) => {
    dispatch({type: ACTIONS.TOGGLE_FAV_PHOTO, photoId});
  };

  const onPhotoSelect = (photo) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, photo});
  }

  const closePhotoModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({type: ACTIONS.SET_PHOTO_DATA, photos: data});
      })
      .catch((error) => {
        console.error("Couldn't fetch photos:", error);
      })
  }, []);

  return {
    state,
    updateFavPhotoIds,
    onPhotoSelect,
    closePhotoModal
  }
}


export default useApplicationData;