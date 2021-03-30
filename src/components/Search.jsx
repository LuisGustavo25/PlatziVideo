import React from 'react';
import '../assets/styles/components/Search.scss';

const main__title = "¿Qué quieres ver hoy?";

const Search = () =>{
    return(
        <section className="main">
        <h2 className="main__title">{main__title}</h2>
        <input type="text" className="input" placeholder="Buscar..." />
      </section>
    );
}

export default Search;