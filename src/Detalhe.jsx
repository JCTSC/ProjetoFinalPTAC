import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";


export default function Detalhe(){
  const {id} = useParams();
    const videos = JSON.parse(localStorage.getItem("Lista")) || [];
    const video = videos.filter((objeto) => {
      if(objeto.id == id) {
        return objeto
      }
      else {
        return null }
    })
    return (
      <div>
        <Header />
        <br /><br /><br />
        <div>
            <div class="card">
            <div class="ratio ratio-16x9">
            <iframe src={"https://www.youtube.com/embed/"+ video[0].link.slice(17) }frameborder="0" ></iframe>
            </div>
            <div class="card-body">
            <p class="card-text">{video[0].artista}</p>
            <p class="card-text">{video[0].canal}</p>
            <p class="card-text">{video[0].data}</p>
            <p class="card-text">{video[0].titulo}</p>
            <p class="card-text">{video[0].letra}</p>
            </div>
            </div>
        </div>
        <br /><br />
        <Footer />
      </div>
    );
}