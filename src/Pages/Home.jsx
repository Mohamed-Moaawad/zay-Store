import React from 'react';
import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import Navs from '../Components/Navs'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';



const Home = () => {
    return (
        <>
            {/* start Nav */}
            <Navs/>
            {/* end Nav */}
            {/* start slide-sec */}
            <div className="slide-sec">
                <Swiper className="mySwiper">
                    <SwiperSlide>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="text">
                                        <h2><span>Zay</span> eCommerce</h2>
                                        <h6>Ullamco laboris nisi ut</h6>
                                        <p>We bring you 100% free CSS templates for your websites. 
                                            If you wish to support TemplateMo, please make a small 
                                            contribution via PayPal or 
                                            tell your friends about our website. Thank yo
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="img">
                                        <img src="images/banner_img_01.jpg"  alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="text">
                                        <h2>Proident occaecat</h2>
                                        <h6>UAliquip ex ea commodo consequat</h6>
                                        <p>You are permitted to use this Zay CSS template for your commercial 
                                            websites. You are not permitted to 
                                            re-distribute the template ZIP file in any kind 
                                            of template collection websites.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="img">
                                        <img src="images/banner_img_02.jpg"  alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="text">
                                        <h2>Repr in voluptate</h2>
                                        <h6>Ullamco laboris nisi ut</h6>
                                        <p>We bring you 100% free CSS templates for your websites. 
                                            If you wish to support TemplateMo, please make a small 
                                            contribution via PayPal or 
                                            tell your friends about our website. Thank yo
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="img">
                                        <img src="images/banner_img_03.jpg"  alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* end slide-sec */}
            {/* start categories */}
            <div className="categories">
                <div className="container">
                    <div className="head">
                        <h3>Categories of The Month</h3>
                        <p>Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa 
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="box">
                                <div className="img">
                                    <img src="images/category_img_01.jpg" alt="" />
                                </div>
                                <span>Watches</span>
                                <Link to='/shop'>go shop</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="box">
                                <div className="img">
                                    <img src="images/category_img_02.jpg" alt="" />
                                </div>
                                <span>Watches</span>
                                <Link to='/shop'>Shoes</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="box">
                                <div className="img">
                                    <img src="images/category_img_03.jpg" alt="" />
                                </div>
                                <span>Accessories</span>
                                <Link to='/shop'>go shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end categories */}
            {/* start cards*/}
            <div className="cards">
                <div className="container">
                    <div className="head">
                        <h3>Featured Product</h3>
                        <p>Reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                            <div className="img">
                                <img src="images/feature_prod_01.jpg" alt="" />
                            </div>
                            <div className="text">
                                <div className="stars">
                                    <div className="icon">
                                    <i class="fa-solid fa-star active"></i>
                                    <i class="fa-solid fa-star active"></i>
                                    <i class="fa-solid fa-star active"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    </div>
                                    <span>@240.00</span>
                                </div>
                                <h4>Gym Weight</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur 
                                    adipisicing elit. Sunt in culpa qui officia deserunt.
                                </p>
                                <h6>Reviews (24)</h6>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                            <div className="img">
                                <img src="images/feature_prod_02.jpg" alt="" />
                            </div>
                            <div className="text">
                                <div className="stars">
                                    <div className="icon">
                                    <i class="fa-solid fa-star active"></i>
                                    <i class="fa-solid fa-star active"></i>
                                    <i class="fa-solid fa-star active"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    </div>
                                    <span>@480.00</span>
                                </div>
                                <h4>Cloud Nike Shoes</h4>
                                <p>enean gravida dignissim finibus. Nullam 
                                    ipsum diam, posuere vitae pharetra sed, 
                                    commodo
                                </p>
                                <h6>Reviews (48)</h6>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                            <div className="img">
                                <img src="images/feature_prod_03.jpg" alt="" />
                            </div>
                            <div className="text">
                                <div className="stars">
                                    <div className="icon">
                                    <i class="fa-solid fa-star active"></i>
                                    <i class="fa-solid fa-star active"></i>
                                    <i class="fa-solid fa-star active"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    </div>
                                    <span>@360.00</span>
                                </div>
                                <h4>Summer Addides Shoes</h4>
                                <p>Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar 
                                    sagittis diam, et scelerisque ipsum lobortis nec.
                                </p>
                                <h6>Reviews (74)</h6>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end cards */}
            {/* start footer */}
            <Footer/>
            {/* end footer */}
        </>
    )
}

export default Home
