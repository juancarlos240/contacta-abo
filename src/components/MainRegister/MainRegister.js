import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './MainRegister.css';


export default class extends Component {
    state = {
         btnAboActive: false,
         btnColActive: false,
         btnContinuar:false,
         estiloUno: 'squer_test squet-img-colab',
         estiloDos: 'squer_test squet-img' 
    }

 
    
      cambioUno = () => {

               this.setState((prevState , props ) => ({
                    btnAboActive: !prevState.btnAboActive,
                }), () => {

                    if(this.state.btnAboActive){
                            this.props.obtenerTipoCuneta(this.state.btnAboActive, 'RegistroAbogado');
                        } else{
                             this.props.obtenerTipoCuneta(false, '');
                        }
                })

                this.state.btnAboActive ? 
                    this.setState({ estiloDos: 'squer_test squet-img'}) : 
                    this.setState({ estiloDos: 'squer_test squet-img_active'}) 

                if(this.state.btnColActive){
                    this.setState({
                    btnColActive: false,
                })
                    this.setState({ estiloUno: 'squer_test squet-img-colab'}) 
                }
        }

       

       cambioDos = () => {

                this.setState((prevState , props ) => ({
                    btnColActive: !prevState.btnColActive, 
                 }), () => {

                    if(this.state.btnColActive){
                            this.props.obtenerTipoCuneta(this.state.btnColActive, 'RegistroDespacho');
                        } else{
                             this.props.obtenerTipoCuneta(false, '');
                        }
                })
                
                
                this.state.btnColActive ? 
                    this.setState({ estiloUno: 'squer_test squet-img-colab'})  : 
                    this.setState({ estiloUno: 'squer_test squet-img-colab_active'}) 


                if(this.state.btnAboActive){
                    this.setState({
                    btnAboActive: false,
                })
                    this.setState({ estiloDos: 'squer_test squet-img'}) 
                }
                
       }
    
     
    render(){

       
        return(
            <div className="segundo-cuadro">

                <Grid container >
                    <Grid item xs={12}>
                        <p className="text-Regsito">Deseas registrarte como:</p>
                    </Grid>
                </Grid>


                <Grid container >
                    <Grid item xs={6}>
                       <div className={this.state.estiloDos}
                    onClick={this.cambioUno }>
                       </div>
                    </Grid>
                    <Grid item xs={6}>
                    <div className={this.state.estiloUno}
                    onClick={this.cambioDos } >
                       </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}