import "./card.css";
import Tooltip from '@mui/material/Tooltip';

export default ({ imgSrc, followersCount, label, key, totalSongs, likes }) => {
  return (
    <Tooltip title={`${totalSongs} songs `} arrow  placement="top">
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img className="card-img" src={imgSrc} />
        </div>
        <div className="card-content">
          {likes 
          ? 
          <span className="card-content-pill">{likes} likes</span>
          :
          <span className="card-content-pill">{followersCount} follows</span>
        
        }</div>
      </div>
      <p className="card-label">{label}</p>
    </div>
    </Tooltip>
  );
};
