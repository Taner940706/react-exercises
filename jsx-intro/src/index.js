import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";

// 1.Using JSX, render a paragraph element with the text My first JSX

const el = document.querySelector("#react-root")
createRoot(el).render(<p>My first JSX</p>)

// 2. Using JSX, render a paragraph that has the class "selected" and an id of "promo" with the text Hello World

const el_1 = document.querySelector("#react-root-1")
createRoot(el_1).render(<p className="selected" id="promo">Hello World</p>)

// 3. Using JSX, complete the getTagline method such that it returns an h2 element with the class: subtitle and the text: Grocery shopping simplified.

function getTagline() {
  return <h2 className="subtitle">Grocery shopping simplified</h2>

}

console.log(getTagline());

// 4. Complete the getLoginStatus method by returning a paragraph with the text: You are logged in when the user's logged in and a link to the login page otherwise with the text Login. The login page is located at /login.

function getLoginStatus(is_loggedin) {
  if (is_loggedin){
      return <p>You are logged in</p>
  }
  else{
      return <a href="/login">Login</a>
  }

}

// sample usage (do not modify)
console.log(getLoginStatus(true));
console.log(getLoginStatus(false));
reportWebVitals();
