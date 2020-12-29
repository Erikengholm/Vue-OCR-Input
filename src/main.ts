import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faEyeSlash)

firebase.initializeApp({
  apiKey: 'AIzaSyD7EeoFUoRGBPIHc9QjbeLBkrYc7wECbWs',
  authDomain: 'loginlist-16c32.firebaseapp.com',
  databaseURL: 'https://loginlist-16c32.firebaseio.com',
  projectId: 'loginlist-16c32',
  storageBucket: 'loginlist-16c32.appspot.com',
  messagingSenderId: '1098710290154',
  appId: '1:1098710290154:web:77e5ea53cc3b2c82591193',
  measurementId: 'G-ECB950P65L',
})

createApp(App).use(router).use(store).mount('#app')
