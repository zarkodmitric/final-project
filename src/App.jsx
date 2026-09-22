import './Css/header.css';
import './Css/footer.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from './components/HomePageComponent/HomePage';
import AboutUs from './components/AboutUsComponent/AboutUs';
import RegisterForm from './components/RegisterFormComponent/RegisterForm';
import Login from './components/LoginComponent/Login';
import { CartProvider } from './components/ContextApiComponent/CartProvider';
import Shop from './components/ShopComponent/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/CartComponent/Cart';
import Checkout from './components/CheckoutComponetn/CheckOut';

function App() {
  return(
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='homePage' element={<HomePage />} />
            <Route path='aboutUs' element={<AboutUs />}/>
            <Route path='registerForm' element={<RegisterForm />} />
            <Route path='login' element={<Login />}/>
            <Route path='shop' element={<Shop />} />
            <Route path='product/:id' element={<ProductDetails />}/>
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;