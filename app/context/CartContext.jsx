"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {

    setCart((oldCart) => {

      const found = oldCart.find(
        (item) =>
          item.name === product.name &&
          item.weight === product.weight
      );


      if (found) {

        return oldCart.map((item) =>

          item.name === product.name &&
          item.weight === product.weight

          ?

          {
            ...item,
            quantity: item.quantity + 1
          }

          :

          item

        );

      }


      return [
        ...oldCart,
        {
          ...product,
          quantity: product.quantity || 1
        }
      ];

    });

  };



  const removeFromCart = (index) => {

    setCart((oldCart) =>
      oldCart.filter((_, i) => i !== index)
    );

  };



  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

}



export function useCart() {

  return useContext(CartContext);

}
