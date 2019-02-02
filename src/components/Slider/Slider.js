import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Slider.css';

export default () => {
    return(

        <Carousel >
  <Carousel.Item bsClass="btn-custom">
    <img className="cuadro" alt="900x500" src="/img/silderRegistro/slider1.png" />
    <Carousel.Caption className="posicioncuadro-1">
      <p className="titulo-slide">Descubre los Beneficios de nuestra plataforma</p>
      <p className="text-slide">Haste Premium y estarás en los primeros lugares en las listas de búsqueda  donde los usuarios accederán a tu perfil.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item bsClass="btn-custom">
    <img className="cuadro" alt="900x500" src="/img/silderRegistro/slider2.png"/>
    <Carousel.Caption className="posicioncuadro-2">
      <p className="titulo-slide">Anunciate sin Límites</p>
      <p className="text-slide">Haste Premium y estarás en los primeros lugares en las listas de búsqueda  donde los usuarios accederán a tu perfil.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="cuadro" alt="900x500" src="/img/silderRegistro/slider3.png" />
    <Carousel.Caption className="posicioncuadro-3">
      <p className="titulo-slide">Deje que <br /> los clientes <br />te encuentren</p>
      <p className="text-slide-3">Haste Premium y estarás en los primeros lugares en las listas de búsqueda  donde los usuarios accederán a tu perfil.</p>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item>
    <img className="cuadro" alt="900x500" src="/img/silderRegistro/slider4.png" />
    <Carousel.Caption className="posicioncuadro-4">
      <p className="titulo-slide">Anunciate sin Límites</p>
      <p className="text-slide-4">Anuncia tu despacho y deja que clientes potenciales te contacten para contratar tus servicios.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

       
    )
}





