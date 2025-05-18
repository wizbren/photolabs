import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';


const PhotoDetailsModal = ({ closeModal, photo }) => {
  console.log("Photo opened in modal:", photo);

  return (
    <div className="photo-details-modal">

      <button 
        className="photo-details-modal__close-button"
        onClick={closeModal}
        >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <h2 className="photo-details-modal__header">
        Photo b {photo.user.name} from {photo.location.city}, {photo.location.country}
      </h2>

      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src="{photo.urls.full"
          alt="Enlarged selected photo"
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;