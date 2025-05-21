import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = ({
  topics,
  favourites,
  onTopicClick,
  onViewFavourites }) => {

  const isItFavourited = favourites.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicClick} />
      <button onClick={onViewFavourites}>
        View Favourites
      </button>
      <FavBadge isItFavourited={isItFavourited} />
    </div>
  )
};

export default TopNavigationBar;