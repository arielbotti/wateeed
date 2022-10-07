import {Link} from 'react-router-dom'
import React from 'react';
import Dropdown from './Dropdown';

const Section = () => {
  const listDropwn = ["Nosotros", "Contacto"]
    return (
        <>
          <li className="nav-item">
            <Link className="nav-link active" to={"/"}><i class="fas fa-home"></i></Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to={""}>Aspersores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to={""}>Toberas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to={""}>Temporizadores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to={""}>Valvulas</Link>
          </li>
          <Dropdown list ={listDropwn}/>
        </>
    );
}

export default Section;
