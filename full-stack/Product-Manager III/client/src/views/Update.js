import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { id } = props;
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
	const [productPrice, setProductPrice] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProductName(res.data.productName);
                setProductDescription(res.data.productDescription);
				setProductPrice(res.data.productPrice);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            productName,
            productDescription,
			productPrice
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product Name</label><br />
                    <input type="text" 
                    name="productName" 
                    value={productName} 
                    onChange={(e) => { setProductName(e.target.value) }} />
                </p>
                <p>
                    <label>Product Description</label><br />
                    <input type="text" 
                    name="productDescription"
                    value={productDescription} 
                    onChange={(e) => { setProductDescription(e.target.value) }} />
                </p>
				<p>
                    <label>Product Price</label><br />
                    <input type="text" 
                    name="productPrice"
                    value={productPrice} 
                    onChange={(e) => { setProductPrice(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
