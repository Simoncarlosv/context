import React from 'react';
import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setMessage('Todos los campos son obligatorios.');
            return;
        }

        if (password.length < 6) {
            setMessage('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden.');
            return;
        }

        setMessage('¡Registro exitoso!');
    };

    return (
        <div className="container mt-5">
            <h2>Registro</h2>
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
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
        </div>
    );
};

export default Register;