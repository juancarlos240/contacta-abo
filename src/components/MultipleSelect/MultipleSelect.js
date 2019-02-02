import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: 296,
    borderBottom: 'none',
    
    
   
  },
   formControl2: {
   
       borderRadius: 2,
       border: '1px solid #c1c1c1',
      '&:before': {
           borderBottom: 'none',
      },
  },
 
  labelMulti: {
   
       padding: '0 14px',
       fontFamily: "'Lato','Arial',sans-serif",
       fontSize: 14,
       color: '#c1c1c1',
        fontWeight: 'normal',
       fontStyle: 'normal',
       fontStretch: 'normal',
       lineHeight: 'normal',
       letterSpacing: 'normal',
  },
 
  chips5: {
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: "'Lato','Arial',sans-serif"

  },
  chip2: {
    margin: theme.spacing.unit / 4,
    borderRadius: 3,
    backgroundColor: '#106c9d',
    color: 'white'
  },

  padding:{
    padding: '5px 4px',
  },
  paddingChip: {
    paddingLeft: 4,
    paddingRight: 11
  },
  whiteDelete:{
    color:'white',
        height: 24,
     '&:focus': {
      backgroundColor: 'rgb(145, 145, 154) !important',
   },

  },


whiteDelete2:{
    color:'white',
        height: 16,
        width: 16,
     '&:focus': {
      backgroundColor: 'rgb(145, 145, 154) !important',
   },

  },


  
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
     MuiChip:{
        borderRadius: 3
      },
  },
  });

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
    },
  },
};

const names = [
  'Accidentes viales',
  'Acoso Sexual',
  'Arquitectura Legal',
  'Comercio Internacional',
  'Concursos y Quiebras',
  'Defensa de la Competencia',
];

function getStyles(name, that) {
  return {
    fontWeight:
      that.state.name.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  };
}

class MultipleSelect extends React.Component {
  state = {
    name: [],
  };

   handleDelete = value => () => {
    console.log("delete"+ value)
    this.setState(state => {
      const name = [...state.name];
      const chipToDelete = name.indexOf(value);
      name.splice(chipToDelete, 1);
      if(name.length < 0) return null
      return { name };
    });
  };

  handleChange = event => {
    console.log(this.state.name.length)
    if (this.state.name.length < 3) {

      this.setState({ name: event.target.value })     
    }else if(this.state.name.length == 3){
     
     let resto = this.state.name.filter(nombre => !event.target.value.includes(nombre))
      console.log(resto)
      let mapa = this.state.name.filter(nombre => { return nombre != resto })
      console.log("mapa")
            console.log(mapa)
                  this.setState({ name: mapa })  
                  event.target.value =   mapa; 
    }
  }
  

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      name: value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.labelMulti} htmlFor="select-multiple-chip">Áreas de especialidad*</InputLabel>
          <Select
            multiple
            className={classes.formControl2}
            value={this.state.name}
            onChange={this.handleChange}
            classes = {{
              selectMenu : classes.padding
            }}
            input={<Input id="select-multiple-chip" />}
          
            renderValue={selected => (
              
              <div className={classes.chips5}>
              {console.log("selec"+selected.length)}
                {selected.map(value => (
                  <Chip key={value} label={value}
                  onDelete={this.handleDelete(value)}
                  
                  classes= {{
                                        root: classes.chip2,
                                        deletable: classes.whiteDelete,
                                        deleteIcon: classes.whiteDelete2,
                                        label: classes.paddingChip,
                                       }}
                 
                  variant="outlined"  />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name} style={getStyles(name, this)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);