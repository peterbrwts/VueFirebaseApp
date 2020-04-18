import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import firebase from 'firebase';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDM1I5RoixleSsHcqu2AQruvb-dE1TesuY",
  authDomain: "tc-herzele.firebaseapp.com",
  databaseURL: "https://tc-herzele.firebaseio.com",
  projectId: "tc-herzele",
  storageBucket: "tc-herzele.appspot.com",
  messagingSenderId: "239596415117",
  appId: "1:239596415117:web:6574040f641bcd055c9ac4",
  measurementId: "G-9BNF2RJ2VP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//https://www.youtube.com/watch?v=XtbYBoKb2zY 30:31