import CheckoutItem from "./CheckoutItem";
import CartItem from "../CartComponent/CartItem";
import { useContext } from "react";
import { CartContext } from "../ContextApiComponent/CartContext";
import { apiRequest } from "@/apiClient";


const Checkout = () => {

    const { cart, removeCart, qtyMinus, qtyPlus, total } = useContext(CartContext);
    const userId = Number(sessionStorage.getItem('id'));

    function pay() {
    console.log("userId:", userId);
    console.log("cart:", cart);

    const body = {
        userId: userId,
        products: cart.map((item) => ({
            id: item.id,
            quantity: item.quantity
        }))
    };

    console.log("Šaljem serveru:", body);

    apiRequest('/carts', {
        method: 'POST',
        body
    });
}

    return (
        <div className="mp-20 background-theme">
            <h1 className="flex justify-center text-3xl font-bold">Checkout</h1>
            <div className="flex justify-between mx-20 my-20">
                <div className="w-140">
                    <CheckoutItem
                        onPay={() => pay()}
                    />
                </div>
                <div className="w-120 flex flex-col gap-4">
                    <p className="font-bold text-xl mb-6">Shipping information</p>
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
                    <p className="ml-auto font-bold text-lg">${total}</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout;