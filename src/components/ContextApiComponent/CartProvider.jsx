
import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    });

    const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    const addToCart = (product, quantityToAdd = 1) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);
            let newCart;

            if (existingItem) {
                newCart = prev.map((item) => (
                    item.id === product.id ? {...item, quantity: item.quantity + quantityToAdd} : item
                ));
            } else {
                newCart = [...prev, { ...product, quantity: quantityToAdd }];
            }

            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const removeCart = (id) => {
        setCart((prev) => {
            const updated = prev.filter((product) => product.id !== id);
            localStorage.setItem('cart', JSON.stringify(updated));   
            return updated;
        })
    }

    const qtyMinus = (id) => {
        setCart((prev) => prev.map(product => product.id === id ? {...product, quantity: Math.max(1, product.quantity - 1)} : product));
    }

    const qtyPlus = (id) => {
        setCart((prev) => prev.map(product => product.id === id ? {...product, quantity: product.quantity + 1} : product));
    }

    const total = cart.reduce((sum, num) => {
        return sum + num.price * (num.quantity || 1);
    }, 0);

    return(
        <CartContext.Provider value={{ cart, setCart, cartCount, addToCart, removeCart, qtyMinus, qtyPlus, total}}>
            {children}
        </CartContext.Provider>
    )
}