import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';

import { FaBars } from 'react-icons/fa';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem component={Link} to="/home" button>
            <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
            <ListItemText primary={'Dashboard'} />
          </ListItem>
          <ListItem component={Link} to="/songs" button>
            <ListItemIcon><MusicNoteRoundedIcon /></ListItemIcon>
            <ListItemText primary={'Minhas músicas favoritas'} />
          </ListItem>
          <ListItem component={Link} to="/albums" button>
            <ListItemIcon><AlbumRoundedIcon /></ListItemIcon>
            <ListItemText primary={'Meus álbuns favoritos'} />
          </ListItem>
          <ListItem component={Link} to="/artists" button>
            <ListItemIcon><StarsRoundedIcon /></ListItemIcon>
            <ListItemText primary={'Meus artistas favoritos'} />
          </ListItem>
          <ListItem component={Link} to="/playlists" button>
            <ListItemIcon><PlaylistPlayRoundedIcon /></ListItemIcon>
            <ListItemText primary={'Minhas playlistas favoritas'} />
          </ListItem>
          
      </List>
      <Divider />
    </div>
  );

  return (
    <div className="float-right">
      <button onClick={toggleDrawer('left', true)} className="mi-header-toggler" style={{ float: 'right !important' }}>
          <FaBars />
      </button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}