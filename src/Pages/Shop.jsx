import React, { useEffect, useState } from 'react'
import './Shop.css'
import Navs from '../Components/Navs'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const Shop = () => {
    const api_url = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState([])
    const [categories, setCategories] = useState([])

    const showProducts = () =>{
        fetch(api_url).then(res => res.json()).then(data=> setProduct(data))
    }

    const getCategories = () =>{
        fetch(`${api_url}/categories`).then(res => res.json()).then(data=> setCategories(data))
    }


    const getCategoriesName = (catName) =>{
        fetch(`${api_url}/category/${catName}`)
        .then(res=>res.json())
        .then(data => setProduct(data))
    }
    

    useEffect(()=>{
        showProducts()
        getCategories()
    },[])
    return (
        <>
            {/* start nav */}
            <Navs/>
            {/* end nav */}
            {/* start shop */}
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm12">
                            <div className='cat'>
                                <h4>Categories</h4> 
                                <ul>
                                    <li>Gender<i class="fa-regular fa-circle-down"></i></li>
                                    <li>Sale<i class="fa-regular fa-circle-down"></i></li>
                                    <li>Product<i class="fa-regular fa-circle-down"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm12">
                            <div className="header">
                                <h3>All Men's Women's</h3>
                                <div className='btns'>
                                    <button onClick={()=>{
                                        showProducts()
                                    }}>All</button>
                                    {categories.map((cat)=>(
                                        <button onClick={()=>{
                                                getCategoriesName(cat)
                                            }} key={cat}>
                                                {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="content">
                                <div className="row">
                                    {product.map((item)=>(
                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="card mt-4">
                                                <div className="img">
                                                    <img src={item.image} alt="" />
                                                    <div className="icon-link">
                                                        <div className="icon">
                                                            <Link to='/shop'><i class="fa-solid fa-cart-shopping"></i></Link>
                                                        </div>
                                                        <div className="icon">
                                                        <Link to={`/detals/${item.id}`}><i class="fa-solid fa-eye"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text p-3">
                                                    <h5>{item.title}</h5>
                                                    <p>{item.description}</p>
                                                    <span>${item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end shop */}
            {/* start footer */}
            <Footer/>
            {/* end footer */}
        </>
    )
}

export default Shop
