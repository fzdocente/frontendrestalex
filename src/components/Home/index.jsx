import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cart from "../Cart";
import Products from "../Products";
import Product from "../Product"
import styles from './styles.module.scss'


const Home = () => {
  let rol = true; // Prueba de role con esta variable
  return (
    <div className={styles.home}>
      <h1>Restaurante Alex.com</h1>
      <Router>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  {/* <Link to="/" className= {rol ? "btn btn-light": "invisible"}>Inicio</Link> */}
                  <Link to="/" className={rol ? "btn btn-outline-primary":"invisible"}>Productos</Link>

                </li>
                <li class="nav-item">
                  <Link to="/Products" className="btn btn-outline-success" style={{marginLeft:10}}>Comprar</Link>
                </li>
                {/* <li class="nav-item">
                  <Link to="/dashboard" className="btn btn-light">Tablero</Link>
                </li>
                <li class="nav-item">
                  <Link to="/user" className="btn btn-light">Usuario</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <hr />
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route path="/Products" element={<Products/>} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} /> */}
        </Routes>
      </Router>

      {/* Funciona antes de las rutas */}
      {/* <Product />
      <Cart />
      <Products /> */}
    </div>
  );
};

export default Home;
