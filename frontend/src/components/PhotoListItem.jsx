import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {


  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={props.photo.id} />
      <img className="photo-list__image" src={props.photo.urls.regular} alt="Main" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} alt="User profile" />
        <div className="photo-list__user-info">
          <p>{props.photo.user.name}</p>
          <p>
            {props.photo.location.city},
            {props.photo.location.country}
          </p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;