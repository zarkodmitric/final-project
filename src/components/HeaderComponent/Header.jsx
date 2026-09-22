import { ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "../ui/input"
import { useContext } from "react"
import { CartContext } from "../ContextApiComponent/CartContext"

const Header = () => {

    const { cartCount } = useContext(CartContext);
    
    return (
        <div id="header" className="h-25 flex items-center justify-between">
            <div className="flex items-center gap-14">
                <img src="/images/logo/itaLogo.png" alt="Slika logoa" className="h-25 ml-8" />
                <ul className="flex gap-18">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='shop'>Shop</Link>
                    </li>
                    <li>
                        <Link to='aboutUs'>About</Link>
                    </li>
                    <li>
                        <Link to='registerForm'>Contact</Link>
                    </li>
                    <li>
                        <Link to='checkout' className="text-red-600">Sale!</Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-20">
                <Input
                    className="border-black w-100 ml-50 text-right h-10 search-input"
                    placeholder="Search"
                />
                <div className="flex gap-10 mr-10">
                    <Link to='cart' className="flex items-center">
                        <ShoppingCart className="icon"/>
                        <p className="flex mt-auto w-[22px] h-[22px] rounded-full border-1 border-black items-center justify-center">{cartCount}</p>
                    </Link>
                    <Link to='login'>
                        <User className="icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;