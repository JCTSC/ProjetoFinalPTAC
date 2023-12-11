import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";


export default function Detalhe(){
    return (
      <div>
        <Header />
        <br /><br /><br />
        <div>
            <div class="card">
            <div class="ratio ratio-16x9">
            <iframe src={"https://www.youtube.com/embed/"+ video.link.slice(17) }frameborder="0" ></iframe>
            </div>
            <div class="card-body">
            <p class="card-text">{video.artista}</p>
                <Link to={"/detalhe/" + video.id}>detalhe</Link>
            </div>
            </div>
        </div>
        <br /><br />
        <Footer />
      </div>
    );
}