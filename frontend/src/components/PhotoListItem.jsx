import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {


  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.imageSource} alt="Main" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} alt="User profile" />
        <div className="photo-list__user-info">
          <p>{props.username}</p>
          <p>
            {props.location.city},
            {props.location.country}
          </p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;