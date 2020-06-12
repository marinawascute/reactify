import React from 'react';
import Template from '../Template';
//import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import api from '../../services/api';
import useModal from '../../component/modal/useModal'
import Message from '../../component/modal/Message'
import Button from "@material-ui/core/Button"



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

    async function handleSearch(name, setData) {

        try {
            const response = await api.post("/albums/search", {
                name: name,
            })

            const data = response.data
            setData({ data: data })

        } catch (err) { (console.log(err.stack)) }
    }


    const classes = useStyles();
    const { isShowing, toggleModal, isEdit, toggleEdit } = useModal();

    function onRowAdd(newData) {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                api.post('/songs/add', { name: newData.name, link: newData.link, artist: newData.artist, image:newData.image }).then(
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
            <Template activeMenu="songs">
                <h3>Músicas favoritas</h3>
                <div className={classes.root}>

                </div>
                <a onClick={() => { toggleModal() }}>
                    <Button variant="contained" style={{backgroundColor: "#ffbb00"}}>Search</Button> 
                </a>
                <br /><br />
                <MaterialTable
                    title="Minhas músicas favoritas"
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
        </>
    )

}


export default Songs
