import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { DDBBread } from './utils/functions';
import {Link} from 'react-router-dom'

const Category = () => {

    const [products, setProducts] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        DDBBread('../json/products.json').then(products => {
            const categories = products.filter(product => products.category_id == id )
            
            const cardProduct = categories.map( products =>
         
                <div className="card bg-light mb-3 cardProduct" key={products.id} style={{maxWidth: '20rem'}}>
                    <img src={"./img/" + products.img} alt="" />
                    <div className="card-header">{products.nombre}</div>
                    <div className="card-body">
                        <p className="card-text">Marca: {products.marca}</p>
                        <p className="card-text">Modelo: {products.modelo}</p>
                        <p className="card-text">precio: ${products.precio}</p>
                        <p className="card-text">Stock: {products.stock}</p>
                        <button className='btn btn-dark' ><Link className='nav-link' to={"/product/" + products.id}>Ver Producto</Link></button>
                    </div>
                </div>)
    
            setProducts(cardProduct)
        })
        
    }, []);

    return (
        <>
            <div className='row'>
                {products}
            </div>
        </>
    );
}

export default Category;
