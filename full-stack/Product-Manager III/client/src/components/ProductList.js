import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/products/" + product._id + "/edit"}>
                        {product.productName}, {product.productDescription}, {product.productPrice}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
