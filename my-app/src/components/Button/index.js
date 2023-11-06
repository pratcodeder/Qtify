import "./Button.css";

export default ({ children }) => {
  return <button className="button">{children}</button>;
};

//.................Example of inline styling.............
// <button
//   style={{
//     width: "48px",
//     height: "170px",
//   }}
// >
//   {children}
// </button>
