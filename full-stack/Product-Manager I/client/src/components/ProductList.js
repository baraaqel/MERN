import React from 'react'
export default props => {
    return (
        <div>
            {props.products.length > 0 && props.products.map((product, idx)=>{
                return <p key={idx}>{product.productName}, {product.productDescription}, {product.productPrice}</p>
            })}
        </div>
    )
}