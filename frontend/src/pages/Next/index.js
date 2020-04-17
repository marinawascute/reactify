import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import './styles.css';


export default function Next(){
const [info, setInfo] = useState([])

    useEffect(()=>{
        async function loadInfo(){
            const user_id = localStorage.getItem('user')
            const response = await api.get('/next', {
                headers: {user_id}
            })
            setInfo(response.data);
        }

        loadInfo();
    }, [])
    return(
        <>
            <h1>dale</h1>
        </>
    )
}