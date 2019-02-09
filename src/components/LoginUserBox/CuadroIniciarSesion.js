import React, { Component } from 'react';
import MainRegister from '../MainRegister/MainRegister'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './CuadroIniciarSesion.css';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';


const styles = theme => ({
    root: {
        height: 32,
        width: 296,
        notchedOutline: {
            borderRadius: 2,
        }


    },

    notchedOutline: {
        borderRadius: 2,
    },
    textFieldError: {
        border: "1px solid red"
    },

    forms: {
        width: 296
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
    colorGray: {
        color: "#c1c1c1",
        justifyContent: 'start',
        paddingLeft: 0
    },
    colorGrayIcon: {
        color: "#c1c1c1",
        padding: 0
    },
    colorActive: {
        color: "#92d9d7",
        justifyContent: 'start',
    },
    colorActiveLabel: {
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
        fontWeight: '400'
    },

    terminos: {
        fontFamily: "'Lato','Arial',sans-serif",
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: "#c1c1c1",
    },


    chips: {
        display: "flex",
        flexWrap: "wrap"
    },
    terminos: {
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

class CuadroIniciarSesion extends Component {

    state = {
        showPassword: false,
        forgetPassword: false,
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    renderFormResetPAssword = () => {
        const { classes } = this.props;
        let errorVariable = false;
        const checkField = () => {
            errorVariable = true
        }

        return (
            <div className='container-box'>
                <div className="container-image-account-forget-password">
                    <div className="container-second-forget-password">
                        <div className="container-img-logo">
                            <img src="/img/Logo-box.svg" alt="logo" />
                        </div>
                    </div>
                </div>
                    <div className="container-title-login">
                        <p className="text-title-login">Restablecer tu contraseña</p>
                    </div>

                <div className="container-text-reset-password">
                    <p className="text-reset-password">Si has olvidado tu contraseña, podemos enviarte un correo a la dirección con la que creaste tu cuenta en Contacta-abogados y podrás restablecerla.</p>
                </div>


                <div className="tercer-cuadro">
                    <Grid container >
                        <Grid container
                            direction="col"
                            justify="left"
                            alignItems="center" className="t paddingTop24" item xs={12}>
                            <Grid container
                                direction="col"
                                justify="center"
                                alignItems="center" item xs={6}>
                                <TextField
                                    variant="outlined"
                                    label="Correo*" type="text" id="test" variant="outlined"
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
                    </Grid>
                </div>
                <div className="container-buttons">
                    <div className="horizontal-layout">
                        <button onClick={() => this.setState({ forgetPassword: false })} className="btn-second">Volver</button>
                    </div>
                    <div className="horizontal-layout">
                        <button className="btn-general">Continuar</button>
                    </div>
                </div>
                <div className="horizontal-layout padding-top-40">
                    <div className="line-horizontal" ></div>
                </div>
                <div className="horizontal-layout padding-top-40">
                    <p className="text-gray">Si tienes cualquier duda o problema escribenos a  <span className="text-link"><a> hola@cotactaabogado.com</a> </span></p>
                </div>
            </div>
        )
    }

    renderForm = () => {
        const { classes } = this.props;
        let errorVariable = false;
        const checkField = () => {
            errorVariable = true
        }
        return (
            <div className='container-box'>
                <div className="container-image-account">
                    <div className="container-second">
                        <div className="contenido-center-flex">
                            <img src="/img/Logo-box.svg" alt="logo" />
                        </div>
                        <div className="contenido-center-flex">
                            <p className="text-title-login">Iniciar Sesión</p>
                        </div>
                    </div>
                </div>
                <div className="tercer-cuadro">
                    <Grid container >
                        <Grid container
                            direction="col"
                            justify="left"
                            alignItems="center" className="t paddingTop24" item xs={12}>
                            <Grid container
                                direction="col"
                                justify="center"
                                alignItems="center" item xs={6}>
                                <TextField
                                    variant="outlined"
                                    label="Correo*" type="text" id="test" variant="outlined"
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

                        <Grid container
                            direction="col"
                            justify="left"
                            alignItems="center" className="t paddingTop24" item xs={12}>
                            <Grid container
                                direction="col"
                                justify="center"
                                alignItems="center" item xs={6}>

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
                                            root: classes.root,
                                            notchedOutline: classes.notchedOutline,
                                            input: errorVariable
                                                ? classes.textFieldError : classes.textFieldInput
                                        },

                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    classes={{
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
                    </Grid>
                    <div className="container-forget-password">
                        <p className="text-forget-password" onClick={() => this.setState({ forgetPassword: true })}>¿Olvidaste tu contraseña?</p>
                    </div>
                </div>
                <div>
                    <div className="horizontal-layout">
                        <Link to=''>
                            <button className="btn-general">Continuar</button>
                        </Link>
                    </div>
                </div>
                <div className="horizontal-layout padding-top-40">
                    <div className="line-horizontal" ></div>
                </div>
                <div className="horizontal-layout padding-top-40">
                    <p className="text-gray">¿No tienes una cuenta? <span className="text-link"><a> <Link to='/RegistroAbogado'>Regístrate</Link></a> </span></p>
                </div>
            </div>
        )
    }

    render() {
        return (


            this.state.forgetPassword === false ? (
                this.renderForm()
            ) : (
                    this.renderFormResetPAssword()
                )


        )


    }
}


export default withStyles(styles)(CuadroIniciarSesion);