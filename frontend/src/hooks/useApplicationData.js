import { useReducer, useEffect } from "react";


// actions for managing state
export const ACTIONS = {
  TOGGLE_FAV_PHOTO: "TOGGLE_FAV_PHOTO",  // toggle if photo is favourited
  SELECT_PHOTO: "SELECT_PHOTO",          // open selected photo in modal
  CLOSE_MODAL: "CLOSE_MODAL",            // close photo modal
  SET_PHOTO_DATA: "SET_PHOTO_DATA",      // load the photo data into state
  SET_TOPIC_DATA: "SET_TOPIC_DATA"       // load the topic data into state
};

// initial state of reducer
const initialState = {                   
  photos: [],                            // list of all photos
  topics: [],                            // list of all topics
  favourites: [],                        // array of favourite photos 
  showModal: false,                      // boolean for showing/hiding modal
  selectedPhoto: null                    // current photo selected in modal
};


function reducer(state, action) {            // reducer function to decide how state changes based on an action
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV_PHOTO: {         // toggles favourite photo: add if not favourited, remove if favourited
      const photoId = action.photoId;
      const favourites = state.favourites.includes(photoId)
        ? state.favourites.filter(id => id !== photoId)
        : [...state.favourites, photoId];
      
      return {...state, favourites};
    }

    case ACTIONS.SELECT_PHOTO:               // when photo is selected, show modal and set the photo
      return {...state, selectedPhoto: action.photo, showModal: true};

    case ACTIONS.CLOSE_MODAL:                // when modal is closed, set boolean flag to false
      return {...state, showModal: false};

    case ACTIONS.SET_PHOTO_DATA:             // store loaded photo data in state
      return {...state, photos: action.photos};

    case ACTIONS.SET_TOPIC_DATA:             // store loaded topic data in state
      return {...state, topics: action.topics};
  }
}


const useApplicationData = () => {            // custom hook for managing state and behaviour
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateFavPhotoIds = (photoId) => {    // toggle photo as a favourite
    dispatch({type: ACTIONS.TOGGLE_FAV_PHOTO, photoId});
  };

  const onPhotoSelect = (photo) => {          // opens modal with selected photo
    dispatch({type: ACTIONS.SELECT_PHOTO, photo});
  }

  const closePhotoModal = () => {             // closes the photo modal
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }

  const fetchPhotosByTopic = (topicId) => {   // fetch photos related to specific topic
    fetch(`/api/topics/${topicId}/photos`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({type: ACTIONS.SET_PHOTO_DATA, photos: data});
      });
  };

  useEffect(() => {                           // fetch photo data when app first loads
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({type: ACTIONS.SET_PHOTO_DATA, photos: data});
      })
      .catch((error) => {
        console.error("Couldn't fetch photos:", error);
      })
  }, []);

  useEffect(() => {                           // fetch topic data when app first loads
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => {
        dispatch({type: ACTIONS.SET_TOPIC_DATA, topics: data});
      })
      .catch((error) => {
        console.error("Couldn't fetch topics:", error);
      })      
  }, []);

  return {          //return all state values/actions so other components can use them
    state,
    updateFavPhotoIds,
    onPhotoSelect,
    closePhotoModal,
    fetchPhotosByTopic
  }
}


export default useApplicationData;