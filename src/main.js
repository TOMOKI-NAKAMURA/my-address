import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBX2kbYW0Gre60R3bTBvqfwp1-3mJ-9Nsw",
  authDomain: "my-address-pj-8b3f5.firebaseapp.com",
  databaseURL: "my-address-pj-8b3f5.firebaseapp.com",
  projectId: "my-address-pj-8b3f5",
  storageBucket: "",
  messagingSenderId: "375636862086"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
