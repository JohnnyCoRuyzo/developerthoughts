import firebase from 'firebase';

var config = { 
    apiKey: "AIzaSyDFtmHez0DR9FXI8xH_kFMghK92su5ovTQ",
    authDomain: "littlecrazypets-back.firebaseapp.com",
    databaseURL: "https://littlecrazypets-back.firebaseio.com",
    projectId: "littlecrazypets-back",
    storageBucket: "littlecrazypets-back.appspot.com",
    messagingSenderId: "1055957405951",
    appId: "1:1055957405951:web:f8669712f581119db33cca",
    measurementId: "G-CV1JZLDBE2"
  };
  var fire = firebase.initializeApp(config);
  firebase.analytics();
  
  export default fire;