import { Button } from "../ui/button"
import { BASE_URL } from "@/apiClient";
import { useContext } from "react";
import { CartContext } from "../ContextApiComponent/CartContext";
import { Link } from "react-router-dom";

const ProductCart = (props) => {

    const { addToCart } = useContext(CartContext);

    return(
        <div className="flex flex-col gap-4 w-60 cart-shadow p-4">
            <Link key={props.id} to={`/product/${props.id}`}>
                <img src={BASE_URL + props.image} alt={props.title} />
                </Link>
            <div className="flex flex-col gap-2">
                <p>{props.title}</p>
                <h3 className="text-xl font-bold">${props.price}</h3>
            </div>
            <Button 
                className='h-10 white-btn btn mt-auto'
                onClick={() => addToCart(props)}
                >
                Add to Cart</Button>
        </div>
    )
}

export default ProductCart;