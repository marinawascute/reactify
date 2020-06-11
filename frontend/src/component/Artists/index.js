import React, {useState, useMemo} from 'react';
import Template from '../Template';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
//import { Link } from 'react-router-dom'; 
import MaterialTable from 'material-table';
import api from '../../services/api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    novo: {
        width: 200,
        marginLeft: 50,
      
    },
    btn: {
        background: 'grey',
        borderRadius: '20',
        width: 50,
        height: 20,
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
    });

    const [listed, setListed] = React.useState({
        listed: false
    })

    const [name, setName] = React.useState('')

    
    function handleSubmit(e) {
        
        api.post('', {
            artist: name, email: localStorage.getItem("email")
        }).then(()=>{setListed(false)}).catch(err=>console.log(err))
    }

    function getData() {
        api.get("/artists/list").then((res) => {
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

    
        let artists = [{'id': 1, 'image': 'url.document.image', 'name': 'BOD'}]
        
    

    /*const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(()=>{
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])*/

    return (
        
        <Template activeMenu="artists">
            <h3>Artistas favoritos</h3>
            <br /><br />
            <div className={classes.cont}>
                <form onSubmit={handleSubmit} className={classes.novo} noValidate autoComplete="off">
                <Input
                placeholder='Search'
                onChange={(event)=>{setName(event.target.value)}}
                
                />
                
                </form>
                <Button variant='contained' className={classes.btn} onClick={()=>{handleSubmit()}}>Search</Button>
            
            </div>

            <div style={{
                background: '#F6F6F6',
                borderRadius: '22',
                width: 300,
                height: 300,
                marginTop:10,
            }}>
                {artists.map(artist=> (
                 <li key={artist.id} style={{
                    style:'none',
                    marginTop: 20,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',

                 }}
                 key={artist.id}
                 >
                        <div style={{  
                            backgroundImage: `${artist.image}`, 
                            
                            background: '#018F',
                            borderRadius: '50%',
                            marginLeft: 20,
                            width: 40,
                            height: 40,

                        }}/>
                        
                        <span style={{
                            marginLeft: 20,
                            fontSize: 13,
                        }}>
                            {artist.name}
                        </span>
                      
                </li>
                ))}
            </div>
        
        </Template>
    )
}


export default Artists
