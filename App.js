/**
 * <div>
 *      <div>
 *              <h1>This is H1 child!</h1>
 *              <h2>This is H1 child!</h2>
 *      <div>
 * </div>
 * 
 * 
 */

const heading = React.createElement("h1",{id: "heading", className:"heading"},"This is H1 heading!!");
const heading2 = React.createElement("h2",{id: "heading2", className:"heading"},"This is H2 heading !!");
const children = React.createElement("div",{id:"child"}, [heading,heading2]);
const parent = React.createElement("div",{id:"parent"}, children);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);