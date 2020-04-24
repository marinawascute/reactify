const albumsController = require('./modules/controllers/albumsController'); 
const artistsController = require('./modules/controllers/artistsController');
const songsController = require('./modules/controllers/songsController');
const playlistsController = require('./modules/controllers/playlistsController');
const usersController = require('./modules/controllers/usersController');

function routes(app) {
	app.route('/albums/list')
		.get(albumsController.listAlbums)

	app.route('/albums/add')
		.post(albumsController.addAlbum)

	app.route('/albums/delete')
        .post(albumsController.deleteAlbum)
	
	app.route('/albums/update')
		.post(albumsController.updateAlbum)
		
	app.route('/artists/list')
		.get(artistsController.listArtists)

	app.route('/artists/add')
		.post(artistsController.addArtist)

	app.route('/artists/delete')
        .post(artistsController.deleteArtist)
	
	app.route('/artists/update')
		.post(artistsController.updateArtist)
		
	app.route('/songs/list')
		.get(songsController.listSongs)

	app.route('/songs/add')
		.post(songsController.addSong)

	app.route('/songs/delete')
        .post(songsController.deleteSong)
	
	app.route('/songs/update')
		.post(songsController.updateSong)
	
	app.route('/playlists/list')
		.get(playlistsController.listPlaylists)

	app.route('/playlists/add')
		.post(playlistsController.addPlaylist)

	app.route('/playlists/delete')
        .post(playlistsController.deletePlaylist)
	
	app.route('/playlists/update')
		.post(playlistsController.updatePlaylist)
	
	app.route('/users/add')
		.post(usersController.addUser)

	app.route('/users/authenticate')
		.post(usersController.authenticateUser)
	
	app.route('/dashboard')
		.post(usersController.dashboardCounts)
}	


module.exports = routes;