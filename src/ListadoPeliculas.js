import { useEffect, useState } from 'react';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';

export default function ListadoPeliculas() {
    const [paginaActual, setPaginaActual] = useState(1);
    const [peliculas, setPeliculas] = useState([]);
    useEffect(() => {
        buscarPeliculas()
    }, [])

    const buscarPeliculas = async () => {
        let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';
        // let url = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json'

        let respuesta = await fetch(url, {
            "method": 'GET',
            "headers": {
                "Accept": 'aplicattion/json',
                "Content-Type": 'application/json',
                "Origin": 'https://lucasmoy.dev/'
                // "Origin": 'https://raw.githubcontent.com/'
            }
        });

        let json = await respuesta.json();

        setPeliculas(json);
    }

    const TOTAL_POR_PAGINA = 7;

    const getTotalPaginas = () => {
        let cantidadTotalDePeliculasJson = peliculas.length;
        return Math.ceil(cantidadTotalDePeliculasJson / TOTAL_POR_PAGINA);
    }

    let peliculasPorPagina = peliculas.slice((paginaActual - 1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA);
    return (
        <PageWrapper>
            {peliculasPorPagina.map(pelicula =>
                <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
                    {pelicula.descripcion}
                </Pelicula>
            )}

            <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
                setPaginaActual(pagina);
            }} />
        </PageWrapper>
    );
}
