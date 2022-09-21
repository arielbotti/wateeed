import React from 'react';
import Dropdown from './Dropdown';

const Section = () => {
    return (
        <>
           <li className="nav-item">
          <a className="nav-link active" href="#">Aspersores
            {/* <span className="visually-hidden">(current)</span> */}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Toberas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Temporizadores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Valvulas</a>
        </li>
          <Dropdown/>
        </>
    );
}

export default Section;
