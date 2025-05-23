import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          title={topic.title}
          onClick={() => onTopicClick(topic.id)}
          />
      ))}
    </div>
  );
};

export default TopicList;