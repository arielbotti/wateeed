import {Link} from 'react-router-dom'
import React from 'react';

const Dropdown = ({list}) => {
    return (
        <>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mas</a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to={'/about'}>{list[0]}</Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to={'/contact'}>{list[1]}</Link>
            
          </div>
          </li>
        </>
        
    );
}

export default Dropdown;
