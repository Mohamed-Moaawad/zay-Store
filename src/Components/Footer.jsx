import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="title">
                                <h4 className='logo'>Zay Shop</h4>
                            </div>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-location-dot"></i> 
                                    el salam city,Cairo,Eygpt
                                </li>
                                <li><i class="fa-solid fa-phone"></i>
                                    010-620-268-26</li>
                                <li>
                                    <i class="fa-solid fa-envelope">
                                    </i>
                                    mohamedmoawad531@icloud.com 
                                    
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="title">
                                <h4>products</h4>
                            </div>
                            <ul>
                                <li>Luxury</li>
                                <li>Sport Wear</li>
                                <li>Men's Shoes</li>
                                <li>Women's Shoes</li>
                                <li>Popular Dress</li>
                                <li>Gym Accessories</li>
                                <li>Sport Shoes</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="title">
                                <h4>Further Info</h4>
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>FAQs</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="copyright">
                        <div className="icons">
                            <div className="icon"> 
                            <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className="icon">
                            <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div className="icon">
                            <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div className="icon">
                            <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <form action="">
                            <input type="email" name="" placeholder='Email address' id="" />
                            <button type="submit">subscribe</button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
