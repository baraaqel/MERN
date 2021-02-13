import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[]);
    
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    
    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
