import React from "react";
import ReactDOM from "react-dom/client"

//! JSX (transpiled before it reaches the JS ) - PARCEL _BABEL
//! JSX => Babel transpiles it to React.createElement +> ReactElement-JS  +> HTMLElement(render)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//*React Element
const jsxheading = <h1 className = "kk">Hello World From React!</h1>
const box = ReactDOM.createRoot(document.getElementById("box"));
box.render(jsxheading)


const abc = (
    <h1>
        Namste React 😊
    </h1>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(abc)

//* END react element

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* React Component 
//class based component
//function component = A function that return JSX is called Functional Component in React

//1
const Heading = () => {
    return <h1>Namste React Component ✔</h1>
}

                //or

const Heading2 = () => <h1>Namste React Component2 ✔</h1>

                //or

const Heading3 = () => (
    <h1>Namste React Component3 ✔</h1>
)

const com = ReactDOM.createRoot(document.getElementById("com"));
com.render(<Heading />)

//! upperCase varabile name when we create component.
//! while render() it should be writen in <Heading /> comfort

//--------------------------------------------------------------------
//2 Component inside Component Or Component Composition

const Title = () => {
    return <h1>Namste React 🚀</h1>
}

const HeadingComponent = () => {
    return <div>
        <Title />
        <h1> React functional Components...</h1>
    </div> 
}

const com2 = ReactDOM.createRoot(document.getElementById("com2"));
com2.render(<HeadingComponent />)


//---------------------------------------------------------------------
//3. JavaScript inside JSX by using {}
// <></> Is called Recat Fragment or Fragment

const JSinJsx = () => {
    return <>
    {console.log ("Hello Im Js in JSX ....🎉")}
    {300 + 100}
    <h1>{200 + 300}</h1>
    <h1>JavaScript inside JSX by using {}</h1>
    </>
}
const com3 = ReactDOM.createRoot(document.getElementById("com3"));
com3.render(<JSinJsx />)

//! Inside Curly bracket within JSX we can write JavaScript Code. { console.log("JS") }


//---------------------------------------------------------------------
//4. Element inside Component

const elem = <h2>I'M  Element Going to Component..</h2>
const Xyz = () => {
    return <>
    {elem}
    <h1>Hello greetings for me to you  Recat elem</h1>
    </>
}
const com4 = ReactDOM.createRoot(document.getElementById("com4"));
com4.render(<Xyz />)


//--------------------------------------------------------------------
//5 Different Ways To Write😎

const Title2 = () => {
    return <h1>Namste🚀</h1>
}

const HeadingComponent2 = () => {
    return <div>
        {Title2()}
        <Title2 />
        <Title></Title>
        <h1> React functional Components...</h1>
    </div> 
}

const com5 = ReactDOM.createRoot(document.getElementById("com5"));
com5.render(<HeadingComponent2 />)

//! <Title2 /> or <Title2></Title2> or {Title()}

//---------------------------------------------------------------------------