import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1DB954'
        }
    }
})
export default function Menu({history}){
   async function handleAlbums(){
        
        history.push('/albums')
    }

    

         return(
        <ThemeProvider theme={theme}>
        <div className="container">
                <Button  onClick={handleAlbums}  variant="contained" color="primary">Go to Albums!</Button>
                <Button  style={{marginTop:25}} variant="contained" color="primary">Go to Artists!</Button>
                <Button  style={{marginTop:25}} variant="contained" color="primary">Go to Playlists!</Button>
                <Button  style={{top:25}} variant="contained" color="primary">Go to Songs!</Button>
        </div>
   </ThemeProvider>
    )
}