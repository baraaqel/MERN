import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [productName, setProductName] = useState(""); 
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            productName,
            productDescription,
            productPrice
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name</label><br/>
                <input type="text" onChange={(e)=>setProductName(e.target.value)} value={productName}/>
            </p>
            <p>
                <label>Product Description</label><br/>
                <input type="text" onChange={(e)=>setProductDescription(e.target.value)} value={productDescription}/>
            </p>
            <p>
                <label>Product Price</label><br/>
                <input type="text" onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
            </p>
            <input type="submit"/>
        </form>
    )
}