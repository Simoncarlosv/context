import React from 'react';

export const CardsPizza = ({titulo, ingredientes, precio, img, descripcion}) =>{
    return (
        <>
            <div className='card mx-2'>
                <img className='card-img-top' src={img} alt={'Foto '+ titulo } />
                <div className='card-body'>
                    <h4 className='card-title mb-3 T-pizza'>{titulo}</h4>
                    <p className='card-text'>{descripcion}</p>
                </div>
                <div className='card-body caja-media'>
                    <h5 className='card-title mb-3 T-ingredientes'>Ingredientes</h5>
                    <p className='card-text fw-light'>🍕 {ingredientes.join(', ')}</p>
                </div>
                <div className='card-body caja-precio'>
                    <h5 className='card-title mb-3 T-precio'>Precio: {precio}</h5>
                </div>
                <div className='card-body botones'>
                    <div className="row">
                        <div className="col-5">
                        <button type="button" className="ver-mas btn btn-light">Ver más</button>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-5">
                        <button type="button" className="agregar btn btn-dark">Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CardsPizza;