export default function Card({video}){
    return (
        <div>

        <iframe 
        width="100" 
        height="100" 
        src={"https://www.youtube.com/embed/"+ video.link.slice(17) }frameborder="0" ></iframe>

            <div class="card-body">
                <p class="card-text">{video.artista}</p>
                <p class="card-text">{video.canal}</p>
                <p class="card-text">{video.link}</p>
                <p class="card-text">{video.letra}</p>
                <p class="card-text">{video.titulo}</p>
                <p class="card-text">{video.data}</p>
                
            </div>
</div>
    );
}