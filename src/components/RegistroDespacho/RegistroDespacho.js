import React, { Component } from "react";
import MainRegister from "../MainRegister/MainRegister";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "./RegistroDespacho.css";
import { withStyles } from "@material-ui/core/styles";
import MultipleSelectOpen from "../MultipleSelectOpen/MultipleSelectOpen";
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  root: {
    height: 32,
    width:296,
    notchedOutline:{
 borderRadius:2,
    }
   
    
  },

  notchedOutline:{
     borderRadius:2,
  },
  textFieldError: {
    border: "1px solid red"
  },
  textFieldFormLabel: {
    fontSize: 14,
    transform: "translate(14px, 8px) scale(1)",
    fontFamily: "'Lato','Arial',sans-serif",
       fontSize: 14,
       color: '#c1c1c1',
        fontWeight: 'normal',
       fontStyle: 'normal',
       fontStretch: 'normal',
       lineHeight: 'normal',
       letterSpacing: 'normal',
  },
  textFieldFormLabelShrink: {
    fontSize: 14,
    transform: "translate(14px, -40px) scale(1)",
    fontWeight: 500
  },

  chips: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class RegistroDespacho extends Component {
  render() {
    const { classes } = this.props;
    let errorVariable = false;
    const checkField = () => {
      // some condition to check for error
      errorVariable = true;
    };
    return (
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
                <div className="segundo-cuadro">

                           <Grid container>
                              <Grid container direction="col" justify="center" alignItems="center" className="t paddingTop24"
                                item xs={12}>
                                <Grid container direction="col" justify="center" alignItems="center"
                                  item xs={6}>
                                  <TextField
                                   variant="outlined"
                                    label="Nombre de Despacho" type="text" id="test" variant="outlined"
                                      onChange={checkField}
                                     
                                      InputProps={{
                                       classes: {
                                        root: classes.root,
                                        notchedOutline: classes.notchedOutline,
                                        
                                        input: errorVariable
                                          ? classes.textFieldError : classes.textFieldInput
                                       }
                                      }}
                                      InputLabelProps={{
                                        className: errorVariable
                                         ? classes.textFieldError : classes.textFieldFormLabel
                                      }}
                                  />
                                  </Grid>
                                </Grid>
                                <Grid container direction="col" justify="center" alignItems="center" className="t paddingTop24" item xs={12}>
                                  <Grid container direction="col" justify="center" alignItems="center" item xs={6}>
                                    <TextField className="classes.textFormat" label="Nombre del Tiltular*" type="text" id="test" variant="outlined"
                                      onChange={checkField}

                                     

                                     InputProps={{
                                       classes: {
                                        root: classes.root,
                                        notchedOutline: classes.notchedOutline,
                                        
                                        input: errorVariable
                                          ? classes.textFieldError : classes.textFieldInput
                                       }
                                      }}
                                      InputLabelProps={{
                                        className: errorVariable
                                         ? classes.textFieldError : classes.textFieldFormLabel
                                      }}
                                    />
                                  </Grid>
                                </Grid>
                                <Grid container direction="col" justify="center" alignItems="center" className="t paddingTop24" item xs={12}>
                                  <Grid container direction="col" justify="center" alignItems="center" item xs={6}>
                                    <TextField className="classes.textFormat" label="Apellido Paterno del Tiltular*" type="text" id="test" variant="outlined"
                                      onChange={checkField}

                                     

                                     InputProps={{
                                       classes: {
                                        root: classes.root,
                                        notchedOutline: classes.notchedOutline,
                                        
                                        input: errorVariable
                                          ? classes.textFieldError : classes.textFieldInput
                                       }
                                      }}
                                      InputLabelProps={{
                                        className: errorVariable
                                         ? classes.textFieldError : classes.textFieldFormLabel
                                      }}
                                    />
                                  </Grid>
                                </Grid>
                                <Grid container direction="col" justify="center" alignItems="center" className="t paddingTop24" item xs={12}>
                                  <Grid container direction="col" justify="center" alignItems="center" item xs={6}>
                                    <TextField label="Apellido Materno del Tiltular*" type="text" id="test" variant="outlined"
                                      onChange={checkField}
                                      InputProps={{
                                       classes: {
                                        root: classes.root,
                                        notchedOutline: classes.notchedOutline,
                                        
                                        input: errorVariable
                                          ? classes.textFieldError : classes.textFieldInput
                                       }
                                      }}
                                      InputLabelProps={{
                                        className: errorVariable
                                         ? classes.textFieldError : classes.textFieldFormLabel
                                      }}
                                    />
                                  </Grid>
                                </Grid>
                                 <Grid container direction="col" justify="center" alignItems="center" className="t " item xs={12}>
                                  
                                    <MultipleSelectOpen />
                                 
                                </Grid>
                            </Grid>

            </div>
             

                <div className="tercer-cuadro">
                <div>
                    <div className="horizontal-layout">
                        <Link to='/RegistroDespachoData'>
                            <button className="btn-general">Continuar</button>    
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
    );
  }
}

export default withStyles(styles)(RegistroDespacho);
