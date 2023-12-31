//........this is the way to use svg file from public folder ......
import { ReactComponent as SearchIcon } from "./search-icon.svg";
import Menu from "../Menu/index" ;
import { useState } from "react";
export default () => {
  const [displayDropDown,setDisplayDropDown] = useState(false);
  return (
    <div style = {{
      position: 'relative'
    }}><form
      style={{
        display: "flex",
        minWidth: "570px",
      }}
    >
      <input
        placeholder="Search an album of your choice"
        style={{ flex: 1, borderRadius: "8px 0px 0px 8px", padding: "8px" }}
      onClick={() => {setDisplayDropDown(!displayDropDown)
      
      }}
      />
      <button
        style={{
          width: "66px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0px 8px 8px 0px",
          padding: "8px",
        }}
      >
        <SearchIcon />
      </button>
    </form>
   {!displayDropDown ? <div></div> 
    :
    <Menu data={[1,2,3,4,5,6]} />
      }
    </div>
  );
};
