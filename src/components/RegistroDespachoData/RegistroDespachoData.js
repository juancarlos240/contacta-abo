import React, { Component } from "react";
import MainRegister from "../MainRegister/MainRegister";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "./RegistroDespachoData.css";
import { withStyles } from "@material-ui/core/styles";
import MultipleSelect from "../MultipleSelect/MultipleSelect";
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const styles = theme => ({
  root: {
    height: 32,
    width:296,
    notchedOutline:{
 borderRadius:2,
 borderColor: '#10587f'
    }
   
    
  },

  notchedOutline:{
     borderRadius:2,
     borderColor: '#10587f'
  },
  textFieldError: {
    border: "1px solid red"
  },

  forms: {
    width:296
  },
  focusedText: {
    borderColor: '#10587f',
    color:'#10587f'
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
    colorGray:{
        color: "#c1c1c1",
        justifyContent: 'start',
        paddingLeft: 0
    },
    colorGrayIcon:{
        color: "#c1c1c1",
        padding: 0
    },
    colorActive:{
        color: "#92d9d7",
        justifyContent: 'start',
    },
    colorActiveLabel:{
         '&:hover': {
            color: "#094565",
            },
        color: "#c1c1c1",
        fontFamily: "'Lato','Arial',sans-serif",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
         margin: 0,
         paddingLeft: 0,
         
        
    },

    labelTermino: {
        fontWeight : '400'
    },
    
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },


  terminos:{
    fontFamily: "'Lato','Arial',sans-serif",
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: "#c1c1c1",
  }



});

class RegistroDespachoData extends Component {


state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
     checkedB: false,
  };
 handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

   handleChangeCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

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
                                    label="Correo*" type="text" id="test" variant="outlined"
                                      onChange={checkField}
                                     
                                      InputProps={{
                                       classes: {
                                        root: classes.root,
                                         focused: classes.focusedText,
                                        notchedOutline: classes.notchedOutline,
                                        
                                        input: errorVariable
                                          ? classes.textFieldError : classes.textFieldInput
                                       }
                                      }}
                                      InputLabelProps={{
                                          focused: classes.focusedText,
                                        className: errorVariable
                                         ? classes.textFieldError : classes.textFieldFormLabel
                                      }}
                                  />
                                  </Grid>
                                </Grid>
                                <Grid container direction="col" justify="center" alignItems="center" className="t paddingTop24"
                                    item xs={12}>
                                    <Grid container direction="col" justify="center" alignItems="center"
                                    item xs={6}>
                                    <TextField
                                            id="outlined-adornment-password"
                                            variant="outlined"
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            label="Password"
                                            value={this.state.password}
                                            onChange={this.handleChange('password')}
                                             
                                      InputLabelProps={{
                                        className: errorVariable
                                         ? classes.textFieldError : classes.textFieldFormLabel
                                      }}
                                            InputProps={{
                                                classes: {
                                             focused: classes.focusedText,root: classes.root,
                                            notchedOutline: classes.notchedOutline,
                                            input: errorVariable
                                            ? classes.textFieldError : classes.textFieldInput
                                        },
                                        
                                                endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    classes= {{
                                                        root: classes.colorGrayIcon
                                                    }}
                                                    aria-label="Toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                    >
                                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                                ),
                                            }}
                                            />
                                    </Grid>
                                </Grid>
                                
                                <Grid container direction="col" justify="center" alignItems="center" className="t paddingTop24" item xs={12}>
                                  <Grid container direction="col" justify="center" alignItems="center" item xs={6}>
                                    <TextField label="Número Teléfonico" type="text" id="test" variant="outlined"
                                      onChange={checkField}
                                      InputProps={{
                                       classes: {
                                         focused: classes.focusedText,root: classes.root,
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
                                    <TextField label="Cédula Profesional" type="text" id="test" variant="outlined"
                                      onChange={checkField}
                                      InputProps={{
                                       classes: {
                                        root: classes.root,
                                         focused: classes.focusedText,
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
                                  <Grid container direction="col" justify="flex-start" alignItems="center" item className={classes.forms}>
                                    
                                            <Checkbox
                                            classes={{
                                                colorPrimary: classes.colorActive,
                                                root: classes.colorGray,
                                                checked: classes.colorActive
                                            }}
                                            color='colorSecondary'
                                            checked={this.state.checkedB}
                                            onChange={this.handleChangeCheck('checkedB')}
                                            value="checkedB"
                                            labelPlacement='start'
                                            />
                                            <p className={classes.colorActiveLabel}><span className={classes.labelTermino}>Aceptar</span> términos y condiciones</p>

                                       
                                  </Grid>
                                </Grid>
                                
                            </Grid>

            </div>

           

                <div className="tercer-cuadro">
                <div>
                    <div className="horizontal-layout">
                        <Link to='/RegistroAbogado'>
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

export default withStyles(styles)(RegistroDespachoData);
