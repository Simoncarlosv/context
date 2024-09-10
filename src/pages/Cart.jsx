import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    // Obtener el carrito y las funciones desde el CartContext
    const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

    return (
        <div className="container mt-5">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <ul className="list-group">
                        {cart.map((pizza) => (
                            <li className="list-group-item d-flex align-items-center" key={pizza.id}>
                                <img 
                                    src={pizza.img} 
                                    alt={pizza.name} 
                                    style={{ width: '50px', marginRight: '10px' }} 
                                />
                                <div className="flex-grow-1">
                                    {pizza.name} - {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} x {pizza.cantidad}
                                </div>
                                <button 
                                    className="btn btn-danger btn-sm mx-2" 
                                    onClick={() => decreaseQuantity(pizza.id)}
                                >
                                    -
                                </button>
                                <button 
                                    className="btn btn-success btn-sm" 
                                    onClick={() => increaseQuantity(pizza.id)}
                                >
                                    +
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3 className="mt-3">Total: {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>
                    <button className="btn btn-primary mt-3">Pagar</button>
                </>
            )}
        </div>
    );
};

export default Cart;