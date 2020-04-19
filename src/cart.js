

// import "./App.css";
// import React, { useState, useImperativeHandle } from "react";
// import Products from "./Products";
// import Cart from "./cart";
// import logo from "./logo.svg";

// export default function App() {

//   const [products, setProducts] = useState([
//     { id: 1, name: 'react', price: 130 },
//     {id: 2, name: 'angular', price: 130},
//     {id: 3, name: 'vue', price: 130},
//     {id: 4, name: 'node', price: 150}
//   ]);

//   const [ cart, setCart ] = useState([]);

//    return (
//      <>

//     {products.map((product) => (
//       <Products
//           key={product.id}
//           product={product}
//           products={products}
//           cart={cart}
//           setCart={setCart}
//       />
//     ))
//     }
//     <Cart
//       cart={cart}
//       setCart={setCart}
//     />
//   </>
//   );
// }


// ////////////////////
// import React, {useState} from 'react';

// export default function Products ({products, product, cart, setCart}) {

//   const {id,name,price} = product;

//   const addToCart = id => {
//       product = products.filter((product) => product.id === id)[0]
//       setCart([
//         ...cart,
//         product
//       ])
//   }

//   const deleteProduct = id =>{
//   const products = cart.filter( product => product.id !== id);
//   setCart(products)

// }
  
//   return(
//     <>
//       <div style={{border: '1px red solid', width: '30vmin', textAlign:'center'}}>
//       <p>Products</p>
//       <h6>{name}</h6>
//       <p>{price}</p>
  

// {products 
// ?
// (<button onClick={ () => addToCart(id)}>comprar</button>) 
// :
//   (
//     <button onClick={ () => deleteProduct(id)} >eliminar</button>
//   )
// }

//       </div>
      
//       </>
//     )
// }


// ////////////////////////////


// import React from "react";
// import Products from "./Products";

// const cart = ({ cart, setCart }) => (
//   <div className="cart">
//     <p>cart</p>

//     {cart.length === 0 ? (
//       <p>no items</p>
//     ) : (
//       cart.map((product) => (
//         <Products
//           key={product.id}
//           product={product}
//           cart={cart}
//           setCart={setCart}
//         />
//       ))
//     )}
//   </div>
// );

// export default cart;


