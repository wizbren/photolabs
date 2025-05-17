// frontend/src/components/PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';


const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: "/Image-1-Full.jpeg",
      regular: "/Image-1-Regular.jpeg",
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: "/Image-2-Full.jpeg",
      regular: "/Image-2-Regular.jpeg",
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: "/Image-3-Full.jpeg",
      regular: "/Image-3-Regular.jpeg",
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
];



const PhotoList = () => {

  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem photo={photo} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList