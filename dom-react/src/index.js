import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. Render the element on the page inside the given root in the index.html page.
// When an index.html file is available, you can see the output of your code by clicking on the Browser tab. You can try it already in this challenge!
// Also make sure to check the code inside the index.html file so that you can get the id of the root element. 

const element = React.createElement("p", {}, "Hello World");
const div = document.querySelector("#react-root")
createRoot(div).render(element)


// 2. Render an <h1>Online Supermarket</h1> on the page inside the given root.

const h1 = React.createElement("h1", {}, "Online Supermarket")
const div_1 = document.querySelector("#react-root_1")
createRoot(div_1).render(h1)

//3. Render an <h1 class="title">Online Supermarket</h1> on the page inside the given root.

const h1_1 = React.createElement("h1", {className: "title"}, "Online Supermarket")
const div_2 = document.querySelector("#react-root_2")
createRoot(div_2).render(h1_1)

reportWebVitals();
