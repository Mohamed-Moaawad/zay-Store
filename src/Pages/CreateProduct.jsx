import React, { useState } from 'react'
import './CreateProduct.css'
import Navs from '../Components/Navs'
import Footer from '../Components/Footer'

const CreateProduct = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(1)

    return (
        <>
            {/* start nav */}
            <Navs/>
            {/* end nav */}
            {/* start shop */}
            <div className="craete">
                <h2>add new product</h2>
                <form>
                    <label>product title :</label>
                    <input type="text" value={title} onChange={(e)=>{
                        setTitle(e.target.value)
                    }} />
                    <label>ULR images :</label>
                    <input type="url" required name="" id="" value={image} onChange={(e)=>{
                        setImage(e.target.value)
                    }} />
                    <label>product description :</label>
                    <textarea name="" id="" value={description} onChange={(e)=>{
                        setDescription(e.target.value)
                    }}></textarea>
                    <label>product price :</label>
                    <input type="number" name="" id="" value={price} onChange={(e)=>{
                        setPrice(e.target.value)
                    }}/>
                    <button type="submit">add product</button>
                </form>
            </div>
             {/* end shop */}
            {/* start footer */}
            <Footer/>
            {/* end footer */}
        </>
    )
}

export default CreateProduct
