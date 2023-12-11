import { Link } from "react-router-dom";

export default function Card({video}){
    return (
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
    );
}