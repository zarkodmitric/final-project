import { Button } from "../ui/button";
import { BASE_URL } from "@/apiClient";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../ContextApiComponent/CartContext";

const Product = (props) => {

const {addToCart} = useContext(CartContext);
const SIZES = ['S', 'M', 'L', 'XL'];
const [quantity, setQuantity] = useState(props.quantity);

    return (
        <div className="my-40 max-w-260 flex gap-10">
            <img src={`${BASE_URL + props.image}`} alt={props.title} className="w-120"/>
            <div className="flex flex-col gap-3 w-100">
                <div>
                    <h2 className="font-bold text-xl">{props.title}</h2>
                    <p className="font-bold text-lg">${props.price}</p>
                </div>
                <p className="pb-8 pt-4 border-b border-gray-400">{props.description}</p>
                <div className="flex items-center gap-10 border-b border-gray-400 pb-3">
                    <p>Select Color</p>
                    <div className="w-8 h-8 rounded-full border-1 border-black"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Select Size</p>
                    <div className="flex gap-6">
                        {SIZES.map((size) => (
                            <Button className='white-btn btn w-12 h-8'>{size}</Button>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between border-1 border-gray-500 rounded-lg w-20 px-2">
                    <button 
                        className="cursor-pointer" 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >-</button>
                    <span>{quantity}</span>
                    <button 
                        className="cursor-pointer" 
                        onClick={() => setQuantity(quantity + 1)}
                    >+</button>
                </div>
                <Button className='cursor-pointer h-10' type='submit' onClick={() => addToCart(props, quantity)}>Add to Cart</Button>
            </div>
        </div>
    )
}

export default Product;