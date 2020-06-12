import React, {useState, useMemo} from 'react';
import Template from '../Template';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
//import { Link } from 'react-router-dom'; 
import MaterialTable from 'material-table';
import api from '../../services/api';
import useModal from '../../component/modal/useModal'
import Message from '../../component/modal/Message'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    novo: {
        width: 300,
        marginLeft: 50,
      
    },
    btn: {
        background: 'grey',
        borderRadius: '20',
        width: 50,
        height: 20,
    },
    btnt: {
        background: 'purple',
        borderRadius: '20',
        width: 50,
        height: 20,
        marginLeft: 20,
    },
    cont: {
        width: 400,
        
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center'
    }
  }));

const Artists = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: 'Artista', field: 'name' },
            { title: 'Link', field: 'link' },
        ],
        data: [],
        att: [],
    });

    const [listed, setListed] = React.useState({
        listed: false
    })

    const [name, setName] = React.useState('')

    
    async function handleSubmit(e) {
        e.preventDefault()
        try{
            const response = await api.post("/artists/search", {
                name: name,
            })

            const data = response.data
            setState({ data: data })
            toggleModal()
        } catch (err){ (console.log(err.stack))} 
    }   
    
    const {isShowing, toggleModal, isEdit, toggleEdit} = useModal();

    async function handleAdd(event){
        const response = await api.post("/artists/add", {
            data: event.target.value,
        })
        const rep = response.data
      
        console.log(rep)
    }   

    function getData() {
        api.get("/artists/list").then((res) => {
            let data = res.data.filter((x => {
                if (x.email === localStorage.getItem("email")) {
                    return x;
                }
            }))
            setState({ att: data  });
        });
    }

    

    /* React.useEffect(() => {
        getData();
    }, [listed]); */

    
       //let artists = [{'id': 1, 'image': 'url.document.image', 'name': 'BOD'}]
        
    

    /*const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(()=>{
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])*/

    return (
        
        <>
                  <Message
                    isShowing={isShowing}
                    hide={toggleModal}
                    isEdit={isEdit}
                    edit={toggleEdit}
                    state={state}
                    func={handleAdd}
                />
        <Template activeMenu="artists">
          
            <h3>Artistas favoritos</h3>
            <br /><br />
            <div className={classes.cont}>
                <form onSubmit={handleSubmit} className={classes.novo} noValidate autoComplete="off">
                <Input
                placeholder='Search'
                onChange={(event)=>{setName(event.target.value)}}
                
                />
                <Button variant='contained' type="submit" className={classes.btn} >Search</Button>
                <Button variant='contained'  className={classes.btnt} onClick={()=>{toggleModal()}} >TESTE</Button>
                <Button variant='contained'  className={classes.btnt} onClick={()=>{getData()}} >LISTAR</Button>
                
                </form>
            
            </div>

            <div style={{
                background: '#F6F6F6',
                borderRadius: '22',
                width: 300,
                height: 300,
                marginTop:10,
            }}>
                {state.att.map(artist=> (
                 <li key={artist.name} style={{
                    style:'none',
                    marginTop: 20,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',

                 }}>
                       
                       <span style={{
                            marginLeft: 20,
                            fontSize: 13,
                            color:"blue"
                        }}>
                            {artist.name}
                        </span>

                        <span style={{
                            marginLeft: 20,
                            fontSize: 13,
                        }}>
                            {artist.link}
                        </span>
                        
                      
                </li>
                ))}
            </div>
        
        </Template>
        </>
    )
}


export default Artists
