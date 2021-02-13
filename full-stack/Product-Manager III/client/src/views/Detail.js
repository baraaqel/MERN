import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <p>Product Name: {product.productName}</p>
            <p>Product Description: {product.productDescription}</p>
            <p>Product Price: {product.productPrice}</p>
			<Link to={"/products/" + product._id + "/edit"}>Edit</Link>

        </div>
    )
}
