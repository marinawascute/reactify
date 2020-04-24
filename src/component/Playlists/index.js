import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom'; 
import MaterialTable from 'material-table';

const Playlists = () => {

    const [state, setState] = React.useState({
        columns: [
            { title: 'Playlist', field: 'name' },
            { title: 'Link', field: 'link' },
        ],
        data: [
            { name: 'Eminem Kamikaze', link: 'https://open.spotify.com/playlist/5yWvLbYeygBWIT5tvb7Grp' },
        ],
    });
  
    return (
        <Template activeMenu="playlists">
            <h3>Playlists favoritas</h3>
            <br/><br/>
            <MaterialTable
                title="Minhas playlists favoritas"
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


export default Playlists
