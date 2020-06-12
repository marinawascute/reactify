import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom'; 
import MaterialTable from 'material-table';
import Button from "@material-ui/core/Button"
import api from '../../services/api';
import useModal from '../../component/modal/useModal'
import Message from '../../component/modal/Message'

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
            setState({ columns: state.columns, data: res.data });
        });
    }


    async function handleSearch(name, setData) {

        try {
            const response = await api.post("/playlists/search", {
                name: name,
            })

            const data = response.data
            setData({ data: data })

        } catch (err) { (console.log(err.stack)) }
    }



    React.useEffect(() => {
        getData();
    }, [listed]);

    const { isShowing, toggleModal, isEdit, toggleEdit } = useModal();

    function onRowAdd(newData) {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                api.post('/playlists/add', { name: newData.name, link: newData.link }).then(
                    () => {
                        setListed(false)
                    }
                );
                getData();
            }, 600);
        })
    }

    return (
        <>
            <Message
                isShowing={isShowing}
                hide={toggleModal}
                isEdit={isEdit}
                handleSearch={handleSearch}
                add={onRowAdd}
            />
            <Template activeMenu="playlists">
                <h3>Playlists favoritas</h3>
                <a onClick={() => { toggleModal() }}>
                    <Button variant="contained" style={{backgroundColor: "#ffbb00"}}>Search</Button> 
                </a>
                <br /><br />
                <br />
                <MaterialTable
                    title="Minhas playlists favoritas"
                    columns={state.columns}
                    data={state.data}
                    editable={{
                        onRowAdd,
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
        </>
    )
}


export default Playlists
