import { apiRequest } from "@/apiClient"
import { useEffect, useState } from "react"
import ProductCart from "./ProductCart";
import Filters from "./Filters";
import { RingLoader } from "react-spinners";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const selectedCategory = getCategoryFromQueryString();
    const filteredProducts = filterProduct(products, selectedCategory);

    function getCategoryFromQueryString() {
        const params = new URLSearchParams(window.location.search);
        return params.get('category');
    }

    function filterProduct(products, category) {
        if (!category) {
            return products;
        }

        return products.filter(product => {
            return product.category && product.category.toLowerCase().startsWith(category.toLowerCase());
        })
    }

    function clearFilter() {
        window.location.href = window.location.pathname;
    }

    useEffect(() => {

        setLoading(true);
        setError('');

        apiRequest('/products')
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false)
            })

    }, []);

    if (loading) {
        return (
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <RingLoader size={60} color="#000000"></RingLoader>
                <p>Loading...</p>
            </div>
        )
    }

    if (error) {
        return <p className="max-w-100 mx-auto mt-40 text-center font-bold text-xl">Something went wrong.</p>
    }

    return (
        <div className="py-20">
            <h1 className="text-3xl font-bold flex justify-center mb-20">View All Products</h1>
            <div className="h-auto flex">
                <div className="mx-15 border-1 border-black rounded-lg">
                    <Filters 
                        selectedCategory={selectedCategory}
                        clearFilter={clearFilter}
                    />
                </div>
                <div className="flex flex-col gap-8 max-w-280">
                    {filteredProducts.length === 0 ?
                        <div>
                            <div className="text-xl text-gray-500">Sorry we dont have products whit this category.</div>
                            
                        </div>
                    :
                    <>
                        <div className="grid grid-cols-4 gap-8 ">
                            {filteredProducts.map((product) => (
                                <ProductCart
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                />
                            ))}
                        </div>
                        <div className="flex gap-4 justify-center">
                            <Button className='btn white-btn h-8 w-25'>Black</Button>
                            <Button className='btn white-btn h-8 w-9'>1</Button>
                            <Button className='btn h-8 w-9'>2</Button>
                            <Button className='btn white-btn h-8 w-9'>...</Button>
                            <Button className='btn white-btn h-8 w-9'>9</Button>
                            <Button className='btn white-btn h-8 w-9'>10</Button>
                            <Button className='btn white-btn h-8 w-25'>Next</Button>
                        </div>
                    </>}
                </div>
            </div>
            <div className="bottom-bg h-50 mt-10 flex justify-evenly items-center">
                <h2 className="w-100 font-bold text-3xl">STAY UP TO DATE ABOUT OUR BEST OFFERS!</h2>
                <div className="w-100 flex flex-col gap-4">
                    <Input
                        className='w-full h-10 text-center text-lg italic bg-white border-black'
                        placeholder='Enter your email adress..'
                    />
                    <Button className='w-full h-10 text-lg cursor-ponter'>Subscribe to Newsletter</Button>
                </div>
            </div>
        </div>
    )
}

export default Shop;
