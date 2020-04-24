import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';


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
            { title: 'Artista', field: 'artists' },
            { title: 'Link', field: 'link' },
        ],
        data: [
            { name: 'Fall', artists: 'Eminem', link: 'https://open.spotify.com/track/58QhkbaAkLFnn7JwAnAato' },
          
        ],
    });

    const classes = useStyles();

    return (
        <Template activeMenu="songs">
            <h3>Músicas favoritas</h3>
            <div className={classes.root}>
                
            </div>
            <br/><br/>
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
