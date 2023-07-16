// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
/*
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div>
ReactElement is an Object. This Object becomes HTML which the browser understands.
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
