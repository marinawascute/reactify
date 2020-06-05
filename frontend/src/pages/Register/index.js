import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

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

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
        color: '#FFB900',
        backgroundColor: '#000',
        '&:hover': {
        color: '#FFB900',
        background: '#000',
        opacity: 0.8,
        },
    },

    areaTitle:{
        fontWeight: 'bold',
        marginTop: 10,
    },

    footer: {
        paddingBottom: 15,
    },

}));

export default function Register() {

    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const [openError, setOpenError] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenError(false);
    };

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        try {
            let response = await api.post('/users/add', data)
            if(response.status !== 201){
                alert(response.data);
            }else{
                history.push('/home');
            }
        } catch (err) {
            setOpenError(true);
        }
    }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
        <div className={classes.paper}>

        <img src={logoImg} alt="Reacti Fy" />

        <Typography component="h1" variant="h5" className={classes.areaTitle}>Cadastro</Typography>

        <form className={classes.form} onSubmit={handleRegister} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="E-mail"
                name="email"
                variant="outlined"
                required
                fullWidth
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                required
                fullWidth
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/" variant="body2">
                Já tem uma conta? Faça Login
              </Link>
            </Grid>
          </Grid>
        </form>
        </div>
        <Box mt={8} className={classes.footer}>
            <Copyright />
        </Box>
        <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                Não foi possível fazer o cadastro!
            </Alert>
        </Snackbar>
    </Container>
  );
}