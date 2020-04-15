
const spotifyWebApi = require('spotify-web-api-node');


// credentials are optional
const spotifyApi = new spotifyWebApi({
    clientId: '747acf3298644b09af680bbd56d02d0d',
    clientSecret: '3774aa71f3d84444b0a4a3ac70202e3c'
});

module.exports = spotifyApi.clientCredentialsGrant().then(
    (data) => {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        spotifyApi.setAccessToken(data.body['access_token']);
        return spotifyApi;
    },
    (err) => {
        console.log('Something went wrong when retrieving an access token', err);
    }
);

