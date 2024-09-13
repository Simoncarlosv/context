import React, { useContext } from 'react';  // Importar useContext
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';  // Importar el CartContext
import logo from '../assets/img/logo.png';

export const Navbar = () => {
    // Obtener totalPrice desde el contexto
    const { totalPrice } = useContext(CartContext);  
    
    // Simular si el usuario tiene token (esto sería dinámico en una aplicación real)
    const token = false;  

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand col-md-2" to="/">
                        <img className="logo-header" src={logo} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">🍕 Home</Link>
                            </li>
                            {token ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile">🔓 Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout">🔒 Logout</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">🔐 Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">🔐 Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        {/* Mostrar el total en el botón de carrito */}
                        <Link className="btn btn-primary" to="/cart">
                            🛒 Total: ${totalPrice ? totalPrice.toLocaleString() : '0'}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;