import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isItFavourited }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isItFavourited}/>
    </div>
  ) 
};

export default FavBadge;