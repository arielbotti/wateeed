import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

const Product = () => {
    const [product, setProducto] =useState([]);
    const {id} = useParams()
    useEffect(()=>{
        fetch('../json/products.json')
        .then(response => response.json())
        .then(product => {
            const product1 = product.find(productArray => productArray.id == id)
            setProducto(product1)
        })
    },[])
    
    return (
        <>
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <ItemListContainer product={product}/>
            </div>
        </>
    );
}

export default Product;
