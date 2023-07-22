import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => (
  <div id="container">
    // Calling functional component inside functional component using different
    ways
    <Title />
    <Title></Title>
    {Title()}
    // Calling react element inside functional component
    {reactElement}
  </div>
);

const Title = () => (
  <h1 className="head" tabIndex="1">
    Functional Component Title
  </h1>
);

const reactElement = (
  <h1 className="head" tabIndex="1">
    // Calling functional component inside react element
    <Title />
    React Element
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering functional component
root.render(<HeadingComponent />);
// Rendering react element
// root.render(reactElement);
