import React from 'react';
import Template from '../Template';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';

import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.primary,
        boxShadow: 'none',
    },
    dash1: {
        padding: theme.spacing(2),
        textWeight: 600,
        textAlign: 'left',
        color: '#2196f3',
        boxShadow: 'none',
        background: '#e3f2fd',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        verticalAlign: 'middle',
        alignItems: 'center',

    },
    dash2: {
        padding: theme.spacing(2),
        textWeight: 600,
        textAlign: 'left',
        color: '#f44336',
        boxShadow: 'none',
        background: '#ffebee',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        verticalAlign: 'middle',
        alignItems: 'center',
    },
    dash3: {
        padding: theme.spacing(2),
        textWeight: 600,
        textAlign: 'left',
        color: '#808080',
        boxShadow: 'none',
        background: '#cfcfcf',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        verticalAlign: 'middle',
        alignItems: 'center',
    },
    dash4: {
        padding: theme.spacing(2),
        textWeight: 600,
        textAlign: 'left',
        color: '#9c27b0',
        boxShadow: 'none',
        background: '#f3e5f5',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        verticalAlign: 'middle',
        alignItems: 'center',
    },
    boximg: {
        padding: theme.spacing(0),
        width: 161,
        height: 161,
        margin: 'auto',
        marginBottom: 8,
        maxWidth: 161,
        borderRadius: 8,
        boxShadow: 'none',

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: 161,
        borderRadius: 8,
    },
}));

const Home = () => {

    const classes = useStyles();
    const [counts, setState] = React.useState({
        albumCount: 0,
        playlistCount: 0,
        songCount: 0,
        artistCount: 0
    });
    const [listed, setListed] = React.useState({
        listed: false
    })

    async function getDashboard() {
        await api.post("/dashboard",{email: localStorage.getItem("email")}).then((res) => {
            
            setState({
                albumCount : res.data.albums,
                playlistCount : res.data.playlists,
                songCount : res.data.songs,
                artistCount : res.data.artists
            })

        }).catch(err => console.log(err));
        //console.log(res)
    }


    React.useEffect(() => {
        getDashboard();
    }, [listed]);

    return (
        <Template activeMenu="home">
            <div className="row">
                <div className="col-lg-10 col-12">
                    <div className="mi-home-content">
                        <h3>Dashboard</h3>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.dash1}>
                            <ListItemIcon style={{ color: '#2196f3', minWidth: 30 }} ><MusicNoteRoundedIcon /></ListItemIcon>
                    Músicas favoritas:<strong style={{ marginLeft: 5, alignItems: 'center' }}>{counts.songCount}</strong>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.dash2}>
                            <ListItemIcon style={{ color: '#f44336', minWidth: 30 }} ><AlbumRoundedIcon /></ListItemIcon>
                    Álbuns favoritos:<strong style={{ marginLeft: 5, alignItems: 'center' }}>{counts.albumCount}</strong>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.dash3}>
                            <ListItemIcon style={{ color: '#808080', minWidth: 30 }}><PlaylistPlayRoundedIcon /></ListItemIcon>
                    Playlists favoritas:<strong style={{ marginLeft: 5, alignItems: 'center' }}>{counts.playlistCount}</strong>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.dash4}>
                            <ListItemIcon style={{ color: '#9c27b0', minWidth: 30 }}><StarsRoundedIcon /></ListItemIcon>
                    Artistias favoritos:<strong style={{ marginLeft: 5, alignItems: 'center' }}>{counts.artistCount}</strong>
                        </Paper>
                    </Grid>
                </Grid>
                <br /><br />
            </div>

        </Template>

    )
}

export default Home