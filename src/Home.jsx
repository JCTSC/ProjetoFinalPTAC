import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./componentes/Card";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

export default function Home(){
  const videos = JSON.parse(localStorage.getItem("Lista")) || [];
    return(
        
  <div>
    <Header/>
    <div className="row row-cols-2">
      {videos.map((videos)=><Card video={videos}/>)}
    </div>
    <Footer/>
  </div>


     );
}