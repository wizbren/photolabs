import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {


  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.photo.imageSource} alt="Main" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.profile} alt="User profile" />
        <div className="photo-list__user-info">
          <p>{props.photo.username}</p>
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