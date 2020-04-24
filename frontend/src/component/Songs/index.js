import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import api from '../../services/api';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));


const Songs = () => {

    const [state, setState] = React.useState({
        columns: [
            { title: 'Música', field: 'name' },
            { title: 'Artista', field: 'artist' },
            { title: 'Link', field: 'link' },
        ],
        data: [
        ],
    });

    const [listed, setListed] = React.useState({
        listed: false
    })

    function getData() {
        api.get("/songs/list").then((res) => {
            setState({ columns: state.columns, data: res.data });
        });
    }

    React.useEffect(() => {
        getData();
    }, [listed]);


    const classes = useStyles();

    return (
        <Template activeMenu="songs">
            <h3>Músicas favoritas</h3>
            <div className={classes.root}>

            </div>
            <br /><br />
            <MaterialTable
                title="Minhas músicas favoritas"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    api.post('/songs/add', { name: newData.name }).then(
                                        () => {
                                            setListed(false)
                                        }
                                    );
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        api.post('/songs/update', { id: newData.id, name: newData.name }).then(
                                            () => {
                                                setListed(false)
                                            }
                                        );
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    api.post('/songs/delete', { id: oldData.id });
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />




        </Template>
    )



}


export default Songs
