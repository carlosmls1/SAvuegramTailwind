import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyADzikr1SRGYQVomfCjUAKBTiV2Q4E8M2A",
  authDomain: "anime-23d90.firebaseapp.com",
  projectId: "anime-23d90",
  storageBucket: "anime-23d90.appspot.com",
  messagingSenderId: "391335532618",
  appId: "1:391335532618:web:178908a6defcb5440aeeb3",
  measurementId: "G-G0890TL0VS"
}



firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const routesCollection = db.collection('routes')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  routesCollection,
  commentsCollection,
  likesCollection
}
