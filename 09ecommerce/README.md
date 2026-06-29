# React E-Commerce Cart App

A simple e-commerce cart application built with React. The project demonstrates state management using Context API and useReducer, along with cart persistence using localStorage.

## Features

* View products
* Add products to cart
* Increase and decrease quantity
* Remove individual products
* Clear the entire cart
* Cart item count in the header
* Dynamic total price calculation
* Cart data persists using localStorage
* Responsive UI built with Tailwind CSS

## Technologies Used

* React
* React Router DOM
* Context API
* useReducer
* Tailwind CSS
* localStorage

## State Management

The cart functionality is implemented using:

* Context API for global state sharing
* useReducer for cart actions
* Derived values for total items and total price

Supported actions:

* ADD_TO_CART
* INC_QUANTITY
* DEC_QUANTITY
* REMOVE_ITEM
* CLEAR_CART

## Project Structure

```text
src/
├── components/
│   ├── Products/
│   └── Cart/
├── context/
│   └── CartContext.jsx
└── App.jsx
```
