const albumsController = require('./modules/controllers/albumsController'); 
const artistsController = require('./modules/controllers/artistsController');
const songsController = require('./modules/controllers/songsController');
const playlistsController = require('./modules/controllers/playlistsController');
const usersController = require('./modules/controllers/usersController');
const verifyJWT = require("./modules/middlewares/jwtVerify");

function routes(app) {
	app.route('/albums/list')
		.get(verifyJWT,albumsController.listAlbums)

	app.route('/albums/add')
		.post(verifyJWT,albumsController.addAlbum)

	app.route('/albums/delete')
        .post(verifyJWT,albumsController.deleteAlbum)
	
	app.route('/albums/update')
		.post(verifyJWT,albumsController.updateAlbum)
		
	app.route('/artists/list')
		.get(verifyJWT,artistsController.listArtists)

	app.route('/artists/add')
		.post(verifyJWT,artistsController.addArtist)

	app.route('/artists/delete')
        .post(verifyJWT,artistsController.deleteArtist)
	
	app.route('/artists/update')
		.post(verifyJWT,artistsController.updateArtist)
		
	app.route('/songs/list')
		.get(verifyJWT,songsController.listSongs)

	app.route('/songs/add')
		.post(verifyJWT,songsController.addSong)

	app.route('/songs/delete')
        .post(verifyJWT,songsController.deleteSong)
	
	app.route('/songs/update')
		.post(verifyJWT,songsController.updateSong)
	
	app.route('/playlists/list')
		.get(verifyJWT,playlistsController.listPlaylists)

	app.route('/playlists/add')
		.post(verifyJWT,playlistsController.addPlaylist)

	app.route('/playlists/delete')
        .post(verifyJWT,playlistsController.deletePlaylist)
	
	app.route('/playlists/update')
		.post(verifyJWT,playlistsController.updatePlaylist)
	
	app.route('/users/add')
		.post(usersController.addUser)

	app.route('/users/authenticate')
		.post(usersController.authenticateUser)
	
	app.route('/dashboard')
		.post(verifyJWT,usersController.dashboardCounts)
}	


module.exports = routes;