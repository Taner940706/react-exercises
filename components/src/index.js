import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
import Hero from './Hero.js';
import Button from './Button.js';
import Link from './Link.js';
import reportWebVitals from './reportWebVitals';

// 1. Create a Hero Component that represents an h1 with the text: Welcome to our supermarket followed by a paragraph with the text: Start shopping.

function Hero_1(){
  return (<><h1> Welcome to our supermarket</h1>
  <p>Start shopping.</p></>);
}


// do not modify
createRoot(document.querySelector("#react-root")).render(<Hero_1></Hero_1>);

// 2. Using React DOM and React.createElement render the Navbar component into the DOM.

function Navbar() {
  return (
      <>
          <h3>Supermarket</h3>
          <p>Start shopping</p>
      </>
  );
}

const root = document.querySelector("#react-root-1");
createRoot(root).render(<Navbar></Navbar>)

// 3. Create the Hero Component in Hero.js that returns the following HTML:

// <h1 class="title">Supermarket</h1>
// <p>Start shopping</p>

// and then render it in the DOM from the index.js.

const el = document.querySelector('#react-root-2')
createRoot(el).render(<Hero></Hero>)


// 4. Create a Button Component in Button.js that returns an button element with the text: Button text
// Create a Link Component in Link.js that returns an a element with the text: Link text
// From the index.js using the 2 components above, render 2 consecutive buttons followed by 1 link inside the App Component.

function App() {
  return (<>
          <Button />
          <Button />
          <Link />
      </>)
}

// Sample usage (do not modify)
createRoot(document.querySelector("#react-root-3")).render(<App />);


reportWebVitals();
