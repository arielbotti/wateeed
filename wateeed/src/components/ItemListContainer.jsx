import React from 'react';

const ItemListContainer = ({product}) => {
    return (
        
        <>
            <h3 className="card-header">Articulo: {product.nombre}</h3>
            <div className="card-body">
                <h5 className="card-title">{product.marca}</h5>
                <h6 className="card-subtitle text-muted">{product.modelo}</h6>
            </div>
            <img src={"../img/" + product.img} className="" />
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: ${product.precio}</li>
                <li className="list-group-item">Stock: {product.stock}</li>
                
            </ul>
        </>
    );
}

export default ItemListContainer;

