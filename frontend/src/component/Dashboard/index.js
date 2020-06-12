import React, { useState, useEffect } from 'react';
import Template from '../Template';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const Home = () => {

    const classes = useStyles();
    const [counts, setState] = useState({
        albumCount: 0,
        playlistCount: 0,
        songCount: 0,
        artistCount: 0
    });
    const [listed, setListed] = useState({
        listed: false
    });
    const [songs, setSongs] = useState([]);

    async function getDashboard() {
        await api.post("/dashboard",{}).then((res) => {
            
            setState({
                albumCount : res.data.albums,
                playlistCount : res.data.playlists,
                songCount : res.data.songs,
                artistCount : res.data.artists
            })

        }).catch(err => console.log(err));
        //console.log(res)
    }

    async function getSongs(){
        const response = await api.get('/songs/list', {
        }).then( (response) => {

            console.log(response.data);
            setSongs(response.data);

        }).catch(err => console.log(err));
    }

    useEffect(() => {
        getDashboard();
    }, [listed]);

    useEffect(() => {
        getSongs();
    }, []);

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

                <Grid container spacing={4}>
                    {songs.map((song) => (
                    <Grid item key={song.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={song.image}
                                title={song.name}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                {song.name}
                                </Typography>
                                <Typography>
                                {song.artist}
                                </Typography>
                            </CardContent>
                            {/** 
                            <CardActions>
                                <Button size="small" color="primary">
                                View
                                </Button>
                                <Button size="small" color="primary">
                                Edit
                                </Button>
                            </CardActions>
                             * 
                            */}
                        </Card>
                    </Grid>
                    ))}
                </Grid>

            </div>

        </Template>

    )
}

export default Home