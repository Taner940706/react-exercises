import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. Complete the getNavbar function such that it returns a div with the message: Logged in as USER. Log out
// Where USER is the name of the user received as an argument.

function getNavbar(user) {
  return <div>Logged in as {user.name}. Log out</div>

}

// sample usage (do not modify)
const element = getNavbar({
  name: "Sam",
  age: 34
});
console.log(element);

// 2. Complete the getNotifications function such that it returns a p with the message: You have X new notifications
// Where X is the number of notifications.

function getNotifications(notifications) {
  return <p>You have {notifications.length} new notifications</p>

}

// sample usage (do not modify)
const notifications = [{
  id: 1,
  text: "Your order has been delivered"
}, {
  id: 2,
  text: "Your coupon code has expired"
}];
const element_1 = getNotifications(notifications);
console.log(element_1);


// 3. Complete the getNavbar function such that it returns a div with the message: Logged in as USER. Log out
// Where USER is the first name and last name of the user received as an argument.

function getNavbar(user) {
  return <div>Logged in as {user.firstName + " " + user.lastName}. Log out</div>

}

// sample usage (do not modify)
const element_2 = getNavbar({
  firstName: "Sam",
  lastName: "Dung",
  age: 27
});
console.log(element_2);

// 4. Complete the getPaymentButton function such that it returns a button with the text Pay. When the user is logged out, it should have the class disabled, and otherwise the class clickable.


function getPaymentButton(user) {
  let name = "disabled";
  if (user.is_loggedin) {
      name = "clickable";
      
  }
  return <button className={name}>Pay</button> ;
}

// sample usage (do not modify)
const user = {
  id: 1,
  is_loggedin: true
}
console.log(getPaymentButton(user));

// 5. Complete the getPaymentMethod function such that it returns the payment method.
// Every payment method should be a list item (li) with the 2 classes,

    // the first one should be payment-method.
    // the second one should be based on the payment method. So if the payment method is Paypal, the class should be: option-paypal.

    function getPaymentMethod(name) {
      return <li className={"payment-method option-" + name.toLowerCase()}>{name}</li>
  
  }
  
  // sample usage (do not modify)
  console.log(getPaymentMethod("Card"));
  console.log(getPaymentMethod("Paypal"));

  
reportWebVitals();
