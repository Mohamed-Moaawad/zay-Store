import React, { useState } from 'react'
import './Navs.css'
import { Link , NavLink } from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap'

const Navs = () => {
    const [menu, setMenu] = useState('')
    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <div className="logo">
                                <Link to='/'>Zay</Link>
                            </div>
                        </div>
                        <div className={`col-lg-7 col-md-7 d-md-flex d-none  justify-content-center colLinks ${menu}`}>
                            <div className="links">
                                <ul>
                                    <li><NavLink to='/'>home</NavLink></li>
                                    <li><NavLink to='/about'>about</NavLink></li> 
                                    <li><NavLink to='/shop'>shop</NavLink></li>
                                    <li><NavLink to='/contact'>contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 d-md-flex d-none">
                            <div className="icons">
                            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                            <i class="fa-solid fa-user"></i>
                            </div>
                        </div>
                        <div className="col-6 menuNav d-flex justify-content-end align-items-center">
                            <div className='menu' onClick={()=>{
                                setMenu(menu == ''? 'opne' : '')
                            }}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navs
