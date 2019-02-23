import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import './ModalForgetPassword.css';

const DialogContent = withStyles(theme => ({
  root: {
    padding:0,
    paddingTop:0
  },
}))(MuiDialogContent);



class CustomizedDialogDemo extends React.Component {
  state = {
    open: true,
  };

  

  handleClose = (props) => {
    this.setState({ open: this.props.open });
  };

  render(props) {

    console.log("componente hijo");
    console.log(this.props.open);
    
   

    return (
       
      <div>

        <Dialog
          onClose={this.props.changeState}
        //   aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogContent  className="conatiner-modal">
            <div className="conatiner-modal">
                <div className="container-box-gray"  >
                <div className="container-img-position">
                <img  width={79} height={141}  src="/img/abogado-correo.svg" />
                </div>
                </div>
                <div className="container-instructions">
                    <p className="text-title-send-mail"> SE ENVIÓ UN CORREO PARA RESTABLECER TU CONTRASEÑA </p>
                    <p className="text-instructions"> Sigue las intruciones que ahí te indicamos para continuar con tu proceso de restablecer contraseña</p>
                    <p className="text-mail-send"> Hola@micorreo.com</p>
                    <p className="text-time-forget-password-change">Tienes un máximo de 24 horas para restablecer tu contraseña. Si no lo haces dentrode ese periodo, tendrás que iniciar nuevamente el proceso.</p>
                </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogDemo;