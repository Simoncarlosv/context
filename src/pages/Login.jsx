import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage('Todos los campos son obligatorios.');
            return;
        }
        if (password.length < 6) {
            setMessage('La contraseña debe contener al menos 6 caracteres.');
            return;
        }
        setMessage('¡Inicio de sesión exitoso!');
    };

    return (
        <div className="container mt-5">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
        </div>
    );
};

export default Login;