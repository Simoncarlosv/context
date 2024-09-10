import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from '../assets/img/logo.png';

export const Navbar = () => {

    const { totalPrice } = useContext(CartContext);
    //const total = 25000;  // Asignar un valor a total
    const token = false;  // Asignar un valor a token

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
                        <Link className="btn btn-primary" to="/cart">
                            🛒 Total: ${totalPrice.toLocaleString()}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;