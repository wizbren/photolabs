import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal }) => {
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
