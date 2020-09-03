import * as firebase from 'firebase';


const config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
}
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const pizzaRef = databaseRef.child('pizzas');
export const orderRef = databaseRef.child('orders');
