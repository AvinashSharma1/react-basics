import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1",{id: "heading", className:"heading"},"This is H1 heading!!");
const heading2 = React.createElement("h2",{id: "heading2", className:"heading"},"This is H2 heading !!");
const heading3 = React.createElement("h1",{id: "heading3", className:"heading"},"This is H1 heading !!");
const heading4 = React.createElement("h2",{id: "heading4", className:"heading"},"This is H2 heading !!");
const children = React.createElement("div",{id:"child"}, [heading,heading2]);
const children2 = React.createElement("div",{id:"child2"}, [heading3,heading4]);
const parent = React.createElement("div",{id:"parent"}, [children,children2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);