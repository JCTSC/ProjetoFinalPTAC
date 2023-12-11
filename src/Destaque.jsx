import { Link } from "react-router-dom";
import { useEffect } from "react";


<nav class="navbar bg-body-tertiary fixed-top">
<div class="container-fluid">
<a class="navbar-brand" href="#"></a>
<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
<div class="offcanvas-header">
<h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
    <li class="nav-item">
      <Link to="/">Home</Link>
    </li> 
</div>
</div>
</div>
</nav>
export default function Destaque(){
  const videos = JSON.parse(localStorage.getItem("Lista")) || [];
    return (
        <div>

   
    {videos.slice(-4).map((video)=><Card video={video}/>)}
    </div>
    );
}