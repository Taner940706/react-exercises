import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 1. Complete the getPaymentMethods function such that it returns a <select> with a class payment-methods (plural) containing 3 <option> elements, representing the following payment methods:

// Card
// Paypal
// Cash on delivery

// Every option should have a class payment-method (singular).

function getPaymentMethods() {
  return <select className="payment-methods">
  <option className="payment-method">Card</option>
  <option className="payment-method">Paypal</option>
  <option className="payment-method">Cash on delivery</option>
          </select>

}

// sample usage (do not modify)
console.log(getPaymentMethods());

// 2. Complete the getDropdownMenu function such that it returns a representation of following HTML:

// <ul id="dropdown-menu" class="dropdown">
// <li>Profile</li>
// <li>Orders</li>
// <li class="separator"></li>
// <li>Logout</li>
// </ul>

function getDropdownMenu() {
  return <ul id="dropdown-menu" className="dropdown">
    <li>Profile</li>
    <li>Orders</li>
    <li className="separator"></li>
    <li>Logout</li>
</ul>

}

// sample usage (do not modify)
console.log(getDropdownMenu());

// 3. Complete the getUserAvatar function such that it returns an img with an src pointing to the path received as an argument.

function getUserAvatar(path) {
  return <img src={path} />

}

// sample usage (do not modify)
const url = "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png";
console.log(getUserAvatar(url));


// 4. Complete the getFooter function such that it returns the following HTML structure:

/* <h3>Your online supermarket</h3>
<ul>
    <li>Contact</li>
    <li>Press</li>
    <li>About</li>
</ul>
<p>All rights reserved &copy;</p> */

function getFooter() {
  return (<React.Fragment><h3>Your online supermarket</h3>
<ul>
    <li>Contact</li>
    <li>Press</li>
    <li>About</li>
</ul>
<p>All rights reserved &copy;</p>
</React.Fragment>)

}

// sample usage (do not modify)
console.log(getFooter());


reportWebVitals();
