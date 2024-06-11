/**
 * <div>
 *      <div>
 *              <h1>This is H1 child!</h1>
 *      <div>
 * </div>
 * 
 * 
 */

const heading = React.createElement("h1",{id: "heading", className:"heading", testAttr:"Test Attribute"},"This is H1 heading from Nested child !!");
const children = React.createElement("div",{id:"child"}, heading);
const parent = React.createElement("div",{id:"parent"}, children);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);