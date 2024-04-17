import React from 'react'

interface CarouselProps{
    imagenUno:string;
    imagenDos:string;
    imagenTres:string;
}

export default function Carousel({imagenUno,imagenDos,imagenTres}:CarouselProps) {
  return (
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={imagenUno} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={imagenDos} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={imagenTres} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
    </div>
  )
}
