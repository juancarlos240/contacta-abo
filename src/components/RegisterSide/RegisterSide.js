import React, {Component} from 'react';
import './RegisterSide.css';
import MainRegister from '../MainRegister/MainRegister'
import {Link} from 'react-router-dom'
export default class extends Component {
    state = {
        tipoCuenta : '',
        desactivo: true,
    }


    obtenerTipoCuneta = (tipo , modo) => {
       this.setState({
             desactivo: !tipo,
             tipoCuenta: modo
        })
       
    }

    render(){
        return(
            <div className="contenedor-reg">
                <div className="primer-cuadro">
                    <div className="hijo_mayor">
                        <div className="contenido-center_flex">
                            <img src="/img/Logo-box.svg" alt="logo" />
                        </div>
                        <div className="contenido-center_flex">
                            <p className="texto-indica">Crea tu Cuenta</p>
                        </div>
                    </div>
                </div>
                <MainRegister 
                obtenerTipoCuneta={this.obtenerTipoCuneta}/>

                <div className="tercer-cuadro">
                <div>
                    <div className="horizontal-layout">
                        <Link to={`/${this.state.tipoCuenta}`}>
                            <button disabled={this.state.desactivo}className="btn-general">Continuar</button>    
                        </Link>    
                    </div> 
                    </div>  
                    <div className="horizontal-layout padding-top-40">
                        <div className="line-horizontal" ></div>
                    </div> 
                    <div className="horizontal-layout padding-top-40">
                        <p className="text-gray">¿Ya tienes una cuenta? <span className="text-link"><a> Inicia Sesión</a> </span></p>
                    </div>
                </div>
            </div>
        )
    }
}
