import SearchBox from "../SearchBox";
import Button from "../Button";

import "./Navbar.css";

export default () => {
  return (
    <div className="navbar">
      <img src="./QtifyLogo.png" width={67} height={34} />
      <SearchBox />
      <Button>Give FeedBack</Button>
    </div>
  );
};
