import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    // Obtener el carrito y las funciones desde el CartContext
    const { cartItems, addToCart, decreaseQuantity, removeFromCart, totalPrice } = useContext(CartContext);

    return (
        <div className="container mt-5">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <ul className="list-group">
                        {cartItems.map((pizza) => (
                            <li className="list-group-item" key={pizza.id}>
                                <img 
                                    src={pizza.img} 
                                    alt={pizza.name} 
                                    style={{ width: '50px', marginRight: '10px' }} 
                                />
                                {pizza.name} - {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} x {pizza.quantity}
                                <button className="btn btn-danger btn-sm mx-2" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                                <button className="btn btn-success btn-sm" onClick={() => addToCart(pizza)}>+</button>
                                <button className="btn btn-danger btn-sm mx-2" onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h3 className="mt-3">Total: {totalPrice.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>
                    <button className="btn btn-primary mt-3">Pagar</button>
                </>
            )}
        </div>
    );
};

export default Cart;