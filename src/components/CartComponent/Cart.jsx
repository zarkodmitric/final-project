import { useContext, useState, useEffect } from "react";
import { CartContext } from "../ContextApiComponent/CartContext";
import CartItem from "./CartItem";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, removeCart, qtyMinus, qtyPlus, total } = useContext(CartContext);

    return (
        <div className="background-theme">
            <h1 className="flex justify-center pt-30 font-bold text-3xl">Your Cart</h1>
            <div className="flex justify-between mx-10">
                <div className="m-20 border-1 border-gray-500 rounded-lg p-8 flex flex-col gap-8 w-150">
                    {cart.map((product) => (
                        <CartItem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            quantity={product.quantity || 1}
                            onRemove={() => removeCart(product.id)}
                            onReduce={() => qtyMinus(product.id)}
                            onIncrease={() => qtyPlus(product.id)}
                        />
                    ))}
                    <div className="ml-auto text-lg font-bold">${total.toFixed(2)}</div>
                </div>
                <div className="m-20 p-8 w-120 flex flex-col gap-6">
                    <div className="flex flex-col gap-6 border-y border-gray-400 py-3">
                        <h3 className="font-bold text-lg">Order Summary</h3>
                        <div className="flex justify-between">
                            <p className="text-sm">Subtotal</p>
                            <p className="font-bold text-sm">${total.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm">Discount</p>
                            <p className="font-bold text-sm">0</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-lg">Total</p>
                        <p className="font-bold text-lg">${total.toFixed(2)}</p>
                    </div>
                    <div className="flex gap-4">
                        <Input
                            className='h-10 text-center text-gray-100 italic border-black'
                            placeholder='Add promo code'
                        ></Input>
                        <Button className='h-10 cursor-pointer text-sm w-35'>Apply</Button>
                    </div>
                    <Link to='/checkout' className="w-full"><Button className='h-10 w-full cursor-pointer text-sm'>Go to Checkout</Button></Link>
                    <p>Prices and costs are not displayed until you complete your purchase.
                    </p>
                    <p>You have 30 days to change your mind. Read more about Delivery and Return.
                    </p>
                    <p>Need help? Please contact Customer Support.</p>
                </div>
            </div>
        </div>

    )
}

export default Cart;

