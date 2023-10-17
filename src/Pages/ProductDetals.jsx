import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navs from '../Components/Navs'
import './ProductDetals.css'
import Footer from '../Components/Footer'

const ProductDetals = () => {
    const params = useParams()
    const [product, setProduct] = useState({})

    const api_url = 'https://fakestoreapi.com/products/'
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`).then(res => res.json()).then(product=> setProduct(product))
    },[])
    return (
        <>
            {/* start nav */}
            <Navs/>
            {/* end nav */}
            {/* start detals */}
            <div className="detals">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="img">
                                <img src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                        <div className="text-detals">
                            <h3>{product.title}</h3>
                            <h5>${product.price}</h5>
                            <h6><span>category :</span> {product.category}</h6>
                            <p><span>Description :</span> {product.description}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end detals */}
            {/* start footer */}
            <Footer/>
            {/* end footer */}
        </>
    ) 
}

export default ProductDetals
