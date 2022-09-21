import React from 'react';

const Dropdown = () => {
    return (
        
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mas</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Nosotros</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Contacto</a>
                </div>
            </li>
        
    );
}

export default Dropdown;
