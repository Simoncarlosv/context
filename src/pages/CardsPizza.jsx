import React from 'react';

export const CardsPizza = ({ titulo, ingredientes, precio, img, descripcion, onAddToCart }) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={titulo} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">🍕 Ingredientes: {ingredientes.join(', ')}</p>
                <p className="card-text">Precio: {precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                <button className="btn btn-primary" onClick={onAddToCart}>Añadir</button>
            </div>
        </div>
    );
};

export default CardsPizza;