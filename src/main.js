import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBxwq1HjQ0OgB_x3IJC-ck3GqgoHhkGKWs",
  authDomain: "myfirechat-be3cd.firebaseapp.com",
  databaseURL: "https://myfirechat-be3cd.firebaseio.com",
  projectId: "myfirechat-be3cd",
  storageBucket: "myfirechat-be3cd.appspot.com",
  messagingSenderId: "143607968431"
};
firebase.initializeApp(config);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
