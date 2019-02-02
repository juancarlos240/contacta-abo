import React, { Component } from "react";
import MainRegister from "../MainRegister/MainRegister";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "./RegistroAbogado.css";
import { withStyles } from "@material-ui/core/styles";
import MultipleSelect from "../MultipleSelect/MultipleSelect";
import FormControl from '@material-ui/core/FormControl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';




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

class RegistroAbogado extends Component {
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


                     <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                          let errors = {};
                          if (!values.email) {
                            errors.email = 'Required';
                          } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                          ) {
                            errors.email = 'Invalid email address';
                          }
                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                          }, 400);
                        }}
                      >
                        {({ isSubmitting }) => (






                           <Grid container>
                              <Grid container direction="col" justify="center" alignItems="center" className="t paddingTop24"
                                item xs={12}>
                                <Grid container direction="col" justify="center" alignItems="center"
                                  item xs={6}>
                                  <TextField
                                   variant="outlined"
                                    label="Nombre*" type="text" id="test" variant="outlined"
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
                                    <TextField className="classes.textFormat" label="Apellido Paterno*" type="text" id="test" variant="outlined"
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
                                    <TextField label="Apellido Materno*" type="text" id="test" variant="outlined"
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
                                  
                                    <MultipleSelect />
                                 
                                </Grid>
                            </Grid>

            </div>
             

                <div className="tercer-cuadro">
                <div>
                    <div className="horizontal-layout">
                        <Link to='/RegistroAbogadoData'>
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

export default withStyles(styles)(RegistroAbogado);
