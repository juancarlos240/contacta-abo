import React, {Component} from 'react';
import HeaderLogin from '../Header/HeaderLogin';
import './IniciarSesion.css';
import CuadroIniciarSesion from '../LoginUserBox/CuadroIniciarSesion';


 class IniciarSesion extends Component {
    render(){
        return(
        <div >  
                <HeaderLogin />
            <div className="container-general container-background">
                <div className='container-box-login'>
                <CuadroIniciarSesion/>
                </div>
            </div>
        </div> 
    )
    }
 }
export default (IniciarSesion);

