import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registrar() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  const [atividade, setAtividade] = useState("");
  const [artista, setArtista] = useState("");
  const [canal, setCanal] = useState("");
  const [link, setLink] = useState("");
  const [letra, setLetra] = useState("");
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const[lista, setLista] = useState(listaLocalStorage || []);
  const[id, setId] = useState(listaLocalStorage[listaLocalStorage.length-1]?.id + 1 || 1);

 useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) },[lista]);

  const salvar = async (e) => {
    e.preventDefault();

    await setLista([...lista, {

      atividade: atividade,
      artista: artista,
      link: link,
      letra: letra,
      data: data,
      titulo: titulo,
      canal: canal,
      id: id
    }]);

    setId(id + 1);
    setAtividade("");
    setCanal("");
    setLink("");
    setLetra("");
    setData("");
    setArtista("");
    setTitulo("");

  };
  return (
    <div>

      <Link to="/">Home</Link>
        <h1>Lista de registro</h1>

        <form onSubmit={salvar}>

          <input type="text"
            onChange={(e) => {
              setAtividade(e.target.value)
            }} />

          <input placeholder="Artista" value={artista} onChange={(e) => { setArtista(e.target.value) }} />
          <input placeholder="Canal" value={canal} onChange={(e) => { setCanal(e.target.value) }} />
          <input placeholder="Link" value={link} onChange={(e) => { setLink(e.target.value) }} />
          <input placeholder="Letra" value={letra} onChange={(e) => { setLetra(e.target.value) }} />
          <input placeholder="Titulo" value={titulo} onChange={(e) => { setTitulo(e.target.value) }} />
          <input placeholder="Data" value={data} onChange={(e) => { setData(e.target.value) }} />

          <button>Registrar</button>
        </form>
    </div>
  );
}
