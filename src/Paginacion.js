import React from 'react'

export default function Paginacion(props) {
    // 
    const getPagina = () => {
        const resultado = [];
        for (var i = 0; i < props.total; i++) {
            let pagina = i+1;
            resultado.push(
                <a
                    onClick={() => props.onChange(pagina)}
                    className={props.pagina === pagina ? 'active' : ''}>
                    {pagina}
                </a>);
        }
        return resultado;
    }
    return (
        <div className="topbar-filter">
            <label>Películas por página:</label>
            <select>
                <option value="5">5 Películas</option>
                <option value="10">10 Películas</option>
            </select>
            <div className="pagination2">
                <span>Página {props.pagina} de {props.total}:</span>
                {/* <a href="#"><i className="ion-arrow-left-b"></i></a> */}
                {getPagina()}
                {/* <a href="#"><i className="ion-arrow-right-b"></i></a> */}
            </div>
        </div>
    )
}