import "./Section.css";
import Card from "../Card";
export default ({ data, title }) => {
  return (
    <div className="section">
      <h1 className="title">{title}</h1>
      <div className="card-container">
        {data.map((cardData) => {
          return (
            <Card
              key={cardData.id}
              imgSrc={cardData.image}
              label={cardData.title}
              followersCount={cardData.follows}
            />
          );
        })}
      </div>
    </div>
  );
};
