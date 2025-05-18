import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';


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
    </div>
  )
};

export default PhotoDetailsModal;
