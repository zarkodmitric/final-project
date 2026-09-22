import { BASE_URL } from "@/apiClient";

const CartItem = (props) => {

    return (
        <div key={props.id} className="flex gap-8 border-b border-gray-400 pb-8 ">
            <img src={BASE_URL + props.image} alt={props.title} className="w-35 h-35 object-cover" />
            <div className="flex flex-col gap-4">
                <h3>{props.title}</h3>
                <div>
                    <p>Color: White</p>
                    <p>{props.size}</p>
                </div>
                <div className="flex justify-between border-1 border-gray-500 rounded-lg w-20 px-2 mt-auto">
                    <button className="cursor-pointer" onClick={() => props.onReduce()}>-</button>
                    <span>{props.quantity}</span>
                    <button className="cursor-pointer" onClick={() => props.onIncrease()}>+</button>
                </div>
            </div>
            <div className="ml-auto flex flex-col justify-between items-center">
                <p className="font-bold text-lg">${props.price}</p>
                <button className="cursor-pointer underline text-gray-400" onClick={() => props.onRemove()}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;