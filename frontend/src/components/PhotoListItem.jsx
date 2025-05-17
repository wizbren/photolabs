import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, isFavourite, toggleFavourite }) => {


  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={photo.id}
        isFavourite={isFavourite}
        toggleFavourite={toggleFavourite}
      />
      <img className="photo-list__image" src={photo.urls.regular} alt="Main" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="User profile" />
        <div className="photo-list__user-info">
          <p>{photo.user.name}</p>
          <p>
            {photo.location.city},
            {photo.location.country}
          </p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;