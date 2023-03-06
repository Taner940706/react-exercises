import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1.Complete the getReactVersion method such that it returns the current installed version of React.

function getReactVersion() {
return React.version
}

// sample usage (do not modify)
console.log(getReactVersion());

//2.Complete the createDivElement function such that it creates a React Element that represents a div with the text Hello World!

function createDivElement() {

  return React.createElement('div',{}, "Hello World!")
  
  }
  
  // sample usage (do not modify)
  console.log(createDivElement());

//3.Complete the createTitle function such that it creates a React Element that represents an h1 with the text Welcome to our supermarket and the class hero-title.

function createTitle() {
  return React.createElement('h1', {className:'hero-title'}, 'Welcome to our supermarket')
}

// sample usage (do not modify)
console.log(createTitle());


reportWebVitals();
