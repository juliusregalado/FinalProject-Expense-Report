import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBi68QoTa1GLRbPLLbZVecad_Jav3DjOAU",
  authDomain: "expense-report-2f21c.firebaseapp.com",
  databaseURL: "https://expense-report-2f21c.firebaseio.com",
  projectId: "expense-report-2f21c",
  storageBucket: "expense-report-2f21c.appspot.com",
  messagingSenderId: "170393706266"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name:'Julius Regalado',
  age: 33,
  isSingle: true,
  location: {
    city: 'JC',
    country: 'US'
  }
})
