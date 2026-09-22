import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
            <Header />

            <div>
                <main>
                    <Outlet />
                </main>
            </div>

            <Footer />
        </>
    )
}

export default Layout;