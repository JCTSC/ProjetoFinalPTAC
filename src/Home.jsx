import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./componentes/Card";

export default function Home(){
  const videos = JSON.parse(localStorage.getItem("Lista")) || [];
    return(
        
        <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">7MZ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Lista de opções</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"></a>
            
          </li>
          <li class="nav-item">
            
           <p><Link to="/registrar">Registrar</Link></p>
           <p><Link to="/destaque">Destaque</Link></p>
           <p><Link to="/detalhe">Detalhe</Link></p>
           
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
        </form>
      </div>
    </div>
  </div>
  <div className="row row-cols-2">
  {videos.map((videos)=><Card video={videos}/>)}
  </div>
</nav>

     );
}