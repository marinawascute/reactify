import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom'; 
import MaterialTable from 'material-table';
import api from '../../services/api';

const Artists = () => {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Artista', field: 'name' },
            { title: 'Link', field: 'link' },
        ],
        data: [],
    });

    const [listed, setListed] = React.useState({
        listed: false
    })

    function getData() {
        api.get("/artists/list").then((res) => {
            setState({ columns: state.columns, data: res.data });
        });
    }

    React.useEffect(() => {
        getData();
    }, [listed]);

    return (
        <Template activeMenu="artists">
            <h3>Artistas favoritos</h3>
            <br /><br />
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
                                    api.post('/artists/add', { name: newData.name }).then(
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
                                        api.post('/artists/update', { id: newData.id, name: newData.name }).then(
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
                                    api.post('/artists/delete', { id: oldData.id });
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
