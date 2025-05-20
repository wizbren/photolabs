import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ title, onClick }) => {
  return (
    <div className="topic-list__item" onClick={onClick}>
      <span>{title}</span>
    </div>
  );
};


export default TopicListItem;
