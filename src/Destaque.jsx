import { Link } from "react-router-dom";
import { useEffect } from "react";
import Card from "./componentes/Card";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";


export default function Destaque(){
  const videos = JSON.parse(localStorage.getItem("Lista")) || [];
    return (
        <div>
          <Header />

   
    {videos.slice(-4).map((video)=><Card video={video}/>)}
    <br /><br /><br /><br />
    <Footer />
    </div>
    );
}