import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyARta7qzf_6zOobulIz2FDZcgRnL9scfCw',
  authDomain: 'linkedin-clone-a0596.firebaseapp.com',
  projectId: 'linkedin-clone-a0596',
  storageBucket: 'linkedin-clone-a0596.appspot.com',
  messagingSenderId: '322493972604',
  appId: '1:322493972604:web:3d3edecff97e0969c2c9f9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
