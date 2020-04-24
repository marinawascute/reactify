import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom'; 
import MaterialTable from 'material-table';
import api from '../../services/api';


const Playlists = () => {

    const [state, setState] = React.useState({
        columns: [
            { title: 'Playlist', field: 'name' },
            { title: 'Link', field: 'link' },
        ],
        data: [
        ],
    });

    const [listed, setListed] = React.useState({
        listed: false
    })

    function getData() {
        api.get("/playlists/list").then((res) => {
            let data = res.data.filter((x => {
                if (x.email === localStorage.getItem("email")) {
                    return x;
                }
            }))
            setState({ columns: state.columns, data: data });
        });
    }

    React.useEffect(() => {
        getData();
    }, [listed]);


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
                            api.post('/playlists/add', { name: newData.name, email: localStorage.getItem("email")  }).then(
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
                            api.post('/playlists/update', { id: newData.id, name: newData.name }).then(
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
                            api.post('/playlists/delete', { id: oldData.id });
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
