import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SignInNav from '../navs/signInNav';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import '../../styles/signIn.css'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      height: 50,
      marginTop: '25%',
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
      marginTop: '25%',
      height: 50,
    }
  });

  class SignInFields extends React.Component {

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    render() {
      const { classes } = this.props;
      return(
        <form className={classes.container}>
        <SignInNav />
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" className={classes.button}>
            {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
            <Icon className={classes.rightIcon}>send</Icon>
        </Button>
        
        </form>
      )
    }
  }

  SignInFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(SignInFields);