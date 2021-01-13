import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyD7EeoFUoRGBPIHc9QjbeLBkrYc7wECbWs',
  authDomain: 'loginlist-16c32.firebaseapp.com',
  databaseURL: 'https://loginlist-16c32.firebaseio.com',
  projectId: 'loginlist-16c32',
  storageBucket: 'loginlist-16c32.appspot.com',
  messagingSenderId: '1098710290154',
  appId: '1:1098710290154:web:77e5ea53cc3b2c82591193',
  measurementId: 'G-ECB950P65L',
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const OCRCollection = db.collection('OCR')
// export utils/refs
export { db, auth, OCRCollection }
