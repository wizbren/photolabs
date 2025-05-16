import { useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = () => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;