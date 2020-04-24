import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom'; 
import MaterialTable from 'material-table';

const Artists = () => {

    const [state, setState] = React.useState({
        columns: [
          { title: 'Artista', field: 'name' },
          { title: 'Link', field: 'link' },
        ],
        data: [
          { name: 'Eminem', link: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR' },
          
        ],
    });
  
    return (
        <Template activeMenu="artists">
            <h3>Artistas favoritos</h3>
            <br/><br/>
            <MaterialTable
                title="Meus artistas favoritos"
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


export default Artists
