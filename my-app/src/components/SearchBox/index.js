//........this is the way to use svg file from public folder ......
import { ReactComponent as SearchIcon } from "./search-icon.svg";

export default () => {
  return (
    <form
      style={{
        display: "flex",
        minWidth: "570px",
      }}
    >
      <input
        placeholder="Search an album of your choice"
        style={{ flex: 1, borderRadius: "8px 0px 0px 8px", padding: "8px" }}
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
  );
};
