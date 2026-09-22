import { apiRequest } from "@/apiClient";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

function ProductDetails() {    

    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        apiRequest(`/products/${id}`)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [id]);

    return(
        <div className="flex justify-center">           
              <Product 
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                description={product.description}
                quantity={1}
                />  
        </div>
    )
}

export default ProductDetails;