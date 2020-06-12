import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import logoImg from '../../assets/logo/logo-reactify-black-yellow.png';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'©'} {new Date().getFullYear()} { 'Copyright '}
      <Link color="inherit" to="http://localhost:3000/#/">
        ReactiFy
      </Link>
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: '40ch',
    },
  },

  container:{
    backgroundColor: '#FFF',
    borderRadius: 8,
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //padding: 10,
  },

  areaTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#fb0',
    backgroundColor: '#000',
    '&:hover': {
      color: '#fb0',
      background: '#000',
      opacity: 0.8,
    },
  },

  footer: {
    paddingBottom: 15,
  },

}));

export default function Login({ history }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpen(false);
  };

 
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post('/users/authenticate', { email: email, password: password },{withCredentials:true})
      localStorage.setItem("email", email);
      // console.log(response);
      history.push('/home');
    } catch (error) {
        setOpen(true);
    }
  }
  
  /*
  async function handleSubmit(event){
    event.preventDefault();
  
    const response = await api.post('/users/authenticate', {email: email, password:password});
    console.log(response);
  }
  */


  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <div className={classes.paper}>

        <img src={logoImg} alt="Reacti Fy" />

        <Typography component="h1" variant="h5" className={classes.areaTitle} >Login</Typography>

        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            id="email"
            type="email"
            name="email"
            label="E-mail"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            autoFocus
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            id="password"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="current-password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" variant="body2">
                Recuperar senha?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Cadastrar-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} className={classes.footer}>
        <Copyright />
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
              E-mail ou senha inválido!
          </Alert>
      </Snackbar>
    </Container>
  );
}