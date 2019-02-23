import React from 'react';
import './HeaderLogin.css';
 

export default () => {
    return(
        
         <div className="header-box">
            <div className="header-box_logo">
                <img src="/img/icon-logotipo-blanco.svg" alt="logo" />
            </div>
            <div className="container-btn-register" >
                <button className="btn-register">Regístrate</button> 
            </div>
         </div>
    )
}