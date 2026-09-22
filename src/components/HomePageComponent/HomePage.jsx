import { Button } from "../ui/button";
import { Link } from "react-router-dom";


const HomePage = () => {
    return(
        <div className="">
            <div id="home-head">
                <div className="h-100 p-15 px-[120px] flex flex-col gap-8">
                    <h2 className="text-3xl font-bold">Discover Brands</h2>
                    <p className="w-150 text-lg ">
                        Discover a collection that blends style and comfort.
                        Browse our carefully selected pieces of modern clothing that follow
                        the latest trends while staying true to your unique style.
                    </p>
                    <div className="flex justify-around mt-15">
                        <img src="/images/home-page/brands/bershka.png" alt="Logo Bershke" className="h-25 w-30 object-contain"/>
                        <img src="/images/home-page/brands/him.png" alt="Logo H&M" className="h-15 w-30 object-contain"/>
                        <img src="/images/home-page/brands/zara.png" alt="Logo Zare" className="h-20 w-30 object-contain"/>
                        <img src="/images/home-page/brands/koton.png" alt="Logo Kotona" className="h-20 w-30 object-contain"/>
                    </div>
                </div>
            </div>
            <div id="home-center">
                <div className="p-15 px-[120px]">
                    <h2 className="text-3xl font-bold mb-14">New Arrivals</h2>
                    <div className="flex w-full max-w-7xl flex-wrap justify-between gap-10 mx-auto">
                        <div className="flex flex-col items-center gap-6">
                            <img src="/images/home-page/categories/women-category.jpg" alt="Women model" className="w-90 h-140"/>
                            <Link to='/shop?category=women'><Button className='h-10 w-50 cursor-pointer'>Women</Button></Link>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <img src="/images/home-page/categories/kids-category.jpg" alt="Kids model" className="w-90 h-140"/>
                            <Link to='/shop?category=kids'><Button className='h-10 w-50 cursor-pointer'>Kids</Button></Link>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <img src="/images/home-page/categories/man-category.jpg" alt="Man model" className="w-90 h-140"/>
                            <Link to='/shop?category=men'><Button className='h-10 w-50 cursor-pointer'>Men</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex w-full h-100">
                    <img src="/images/home-page/bottom/couple-in-park.png" alt="Couple in park" className="home-bottom-img"/>
                    <img src="/images/home-page/bottom/kids-in-park.png" alt="Kids in park" className="home-bottom-img" />
                </div>
                <div className="flex justify-between py-6 px-[120px] bottom-bg">
                    <h2 className="text-3xl font-bold text-red-600">Enjoy 20% Off This Seasons Styles</h2>
                    <Link to='/shop'><Button className="h-10 w-50 cursor-pointer">Shiow All</Button></Link>
                </div>              
            </div>
        </div>
        
    )
}

export default HomePage;