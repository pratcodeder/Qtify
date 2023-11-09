import "./card.css";

export default () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img
            className="card-img"
            src="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          />
        </div>
        <div className="card-content">
          {/* <div className="card-content-pill"> */}
          <span className="card-content-pill">100 follows</span>
          {/* </div> */}
        </div>
      </div>

      <p className="card-label">New English Songs</p>
    </div>
  );
};
