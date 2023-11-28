import "./Section.css";
import Card from "../Card";
import { useState } from "react";
import Carousel from "../Carousel";
export default ({ navId, data, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="title">{title}</h1>
        <h1
          className="section-toggle-btn"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </h1>
      </div>
      {isCollapsed ? (
        <h2>
          <Carousel navId={navId} data={data} />
        </h2>
      ) : (
        <div className="card-container">
          {data.map((cardData) => {
           
            return (
              <Card
                key={cardData.id}
                imgSrc={cardData.image}
                label={cardData.title}
                followersCount={cardData.follows}
                totalSongs= {cardData.songs.length}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
