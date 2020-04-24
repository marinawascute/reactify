import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';



const Albums = () => {


    //EXEMPLO
    const [state, setState] = React.useState({
        columns: [
          { title: 'Álbum', field: 'name' },
          { title: 'Artista', field: 'artists' },
          { title: 'Link', field: 'link' },
        ],
        data: [
          { name: 'Kamikase', artists: 'Eminem', link: 'https://open.spotify.com/album/3HNnxK7NgLXbDoxRZxNWiR' },
          
        ],
    });

    return (
        <Template activeMenu="albums">
            <h3>Álbuns favoritos</h3>
            <br/><br/>
            <br/>
            <MaterialTable
                title="Meus álbuns favoritos"
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

export default Albums
