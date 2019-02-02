import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Grid from '@material-ui/core/Grid';
import Slider from '../Slider/Slider';
import '../../utils/typography';
import MainRegister from '../MainRegister/MainRegister';
import PageNotFound from '../Error/PageNotFound';

 

export default class extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                
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



                <Switch>
                        <Route exact path="/" render={() => (
                            <MainRegister 
                                obtenerTipoCuneta={this.obtenerTipoCuneta}
                            />
                        )} />
                        <Route component={PageNotFound} />
                </Switch>


                

                <div className="tercer-cuadro">
                <div>
                    <div className="horizontal-layout">
                        <button disabled={this.state.desactivo}className="btn-general">Continuar</button>            
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
                    
                           
                  

                
                        
</div>
            </BrowserRouter>
        )
    }
}