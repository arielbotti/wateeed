
import React from 'react';
import CartWidget from './CartWidget';
import Login from './login';
import Section from '../layouts/Section';


const NavBar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Wateeed</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <Section/>
              </ul>
              <CartWidget/>
              <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder="Productos" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
              </form>
              <Login/>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavBar;






