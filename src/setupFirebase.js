import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC_dsdinJTJlBxahdhciJJNge016izZyUw",
    authDomain: "ncitapp-85db0.firebaseapp.com",
    databaseURL: "https://ncitapp-85db0.firebaseio.com",
    projectId: "ncitapp-85db0",
    storageBucket: "",
    messagingSenderId: "451872324350"
}
firebase.initializeApp(config)

// firebase.auth().createUserWithEmailAndPassword(
//   'bartosz.cytrowski+c1@gmail.com',
//   'test1234'
// )

//firebase
    //.auth()
    //.signInWithEmailAndPassword('wp@wp.pl', '123456test')

// firebase.auth().currentUser

//firebase.auth().onAuthStateChanged(user => {
   // if (user === null) {
    //    console.log('logged out')
    //} else {
    //    console.log('logged in: ', user)
    //}
//})
