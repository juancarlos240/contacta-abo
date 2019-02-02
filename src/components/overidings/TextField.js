import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// We can inject some CSS into the DOM.
const styles = {
  TextField: {
    
    color: 'red !important',
    
  },
};

function OverridesClassNames(props) {
  return (
    <TextField  className={props.classes.textField}>
      {props.children ? props.children : 'class names'}
    </TextField>
  );
}

OverridesClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OverridesClassNames);