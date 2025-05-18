import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';


const PhotoDetailsModal = ({ closeModal, photo, favourites, toggleFavourite, openModal }) => {
  console.log("Photo opened in modal:", photo);

  //* Convert object to array (MIGHT NOT BE RIGHT)
  const similarPhotosArray = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Header */}
      <h2 className="photo-details-modal__header">
        Photo b {photo.user.name} from {photo.location.city}, {photo.location.country}
      </h2>
      {/* Enlarged selected image */}
      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          alt="Enlarged selected photo"
        />
      </div>
      {/* Similar photos section */}
      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList
          photos={similarPhotosArray}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          openModal={openModal}
        />

      </div>
    </div>
  )
};

export default PhotoDetailsModal;