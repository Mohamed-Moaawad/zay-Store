import React from 'react'
import './About.css'
import Navs from '../Components/Navs'
import Footer from '../Components/Footer'

const About = () => {
    return (
        <>
            {/* start nav */}
            <Navs/>
            {/* end nav */}
            
            <div className="about"> 
                {/* start header */}
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <div className="text h-100 d-flex align-items-start flex-column justify-content-center">
                                    <h2>about us</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, 
                                        consequatur magnam? Maxime temporibus amet, praesentium, eum fugit 
                                        voluptatibus aut animi itaque repellendus suscipit nisi, 
                                        neque optio consectetur repellat perferendis officia.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 d-md-flex d-sm-none">
                                <div className="img">
                                    <img src="images/about-hero.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end header */}
                {/* start boxs */}
                <div className="boxs-sec">
                    <div className="head mt-5 mb-5">
                        <h3>Our Services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod Lorem ipsum dolor sit amet.
                            </p>
                    </div>
                    <div className="boxs">
                        <div className='container'>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="box">
                                        <i class="fa-sharp fa-solid fa-truck"></i>
                                        <span>Delivery Services</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="box">
                                    <i class="fa-sharp fa-solid fa-arrow-right-arrow-left"></i>
                                        <span>Shipping & Return</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="box">
                                        <i class="fa-sharp fa-solid fa-percent"></i>
                                        <span>Promotion</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="box">
                                    <i class="fa-sharp fa-solid fa-user"></i>
                                        <span>24 Hours Service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end boxs */}
            </div>
            {/* start footer */}
            <Footer/>
            {/* end footer */}
        </>
    )
}

export default About
