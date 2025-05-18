import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, isFavourite, toggleFavourite }) => {

  const handleClick = () => {
    toggleFavourite(photoId);
    console.log(`CLICK: Photo ID = ${photoId}`);
  };


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;