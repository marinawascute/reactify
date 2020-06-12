import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom';
import api from '../../services/api';
import MaterialTable from 'material-table';
import useModal from '../../component/modal/useModal'
import Message from '../../component/modal/Message'




const Albums = () => {

    const [state, setState] = React.useState({
        columns: [
            { title: 'Álbum', field: 'name' },
            { title: 'Artista', field: 'artist' },
            { title: 'Link', field: 'link' },
        ],
        data: [
        ],
    });

    const [listed, setListed] = React.useState({
        listed:false
    })

    function getData() {
        api.get("/albums/list").then((res) => {
            let data = res.data.filter((x => {
                if (x.email === localStorage.getItem("email")) {
                    return x;
                }
            }))
            setState({columns:state.columns, data:data});
        });
    }

    React.useEffect(() => {
        getData();
    },[listed]);
    
    const {isShowing, toggleModal, isEdit, toggleEdit} = useModal();

    return (
        <>
        <Message
        isShowing={isShowing}
        hide={toggleModal}
        isEdit={isEdit}
        edit={toggleEdit}
        state={state}
    />
        <Template activeMenu="albums">
            <h3>Álbuns favoritos</h3>
            <a onClick={()=>{toggleModal()}}>Search</a>
            <br /><br />
            <br />
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
                                    api.post('/albums/add', { name: newData.name, email: localStorage.getItem("email")  }).then(
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
                                        api.post('/albums/update', { id: newData.id, name: newData.name }).then(
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
        </>
    )

}

export default Albums
