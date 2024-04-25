//1
//JavaScript
const h1 = document.createElement('h1');
h1.innerHTML = "Hello World From JavaScript!"
const root = document.getElementById("root")
root.appendChild(h1)
console.log(h1) //!imp "JS Element" coverted into HTML by Browser

//2
// REACT
const element = React.createElement('h1', {id: "heading", className: "info"}, 'Hello World From React!');
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(element)
console.log(element) //!imp "this object is a "React Element"  at end of the day.. React element convert into html" by babel and render methods


//3
// <div id="parent">
//     <div id="child">
//     <h1> "I'm A Tag" </h1>
//      <h2> "I'm A Tag" </h2>
//     </div>
// </div>

const parent = React.createElement('div', {id: "parent"},
React.createElement(
     'div', {id: "child"},
     [
      React.createElement('h1',{}, "I'm a tag"),
      React.createElement('h2',{}, "I'm a tag")
     ]
    )
);

const box = ReactDOM.createRoot(document.getElementById("box"));
box.render(parent)
