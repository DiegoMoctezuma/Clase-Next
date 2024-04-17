import React from 'react'

interface CardProps{
    titulo:string;
    texto:string;
    imagen:string;
    textoBoton: string;
}

export default function Card({imagen,texto,textoBoton,titulo}:CardProps) {
  return (
    <div className="card" style={{width:"18rem"}}>
        <img src={imagen} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{texto}</p>
            <a href="/" className="btn btn-primary">{textoBoton}</a>
        </div>
    </div>
  )
}
