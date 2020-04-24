const firebase = require('firebase');


let firebaseConfig = {
    apiKey: "AIzaSyCXyAJs6SxXhiU-ykcrK5sRsBC8QvE5WvQ",
    authDomain: "fylist-2b716.firebaseapp.com",
    databaseURL: "https://fylist-2b716.firebaseio.com",
    projectId: "fylist-2b716",
    storageBucket: "fylist-2b716.appspot.com",
    messagingSenderId: "746131828704",
    appId: "1:746131828704:web:9c3ce958903e198ac78585",
    measurementId: "G-R567PW8RKQ"
};

firebase.initializeApp(firebaseConfig);


module.exports = firebase;

