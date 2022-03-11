import { createApp } from "vue";
import firebase from 'firebase'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const firebaseConfig = {
    apiKey: "AIzaSyAX-MokjCk_Snt6GfRFm-PIMQrd6cjIfJY",
    authDomain: "parcel-koi.firebaseapp.com",
    projectId: "parcel-koi",
    storageBucket: "parcel-koi.appspot.com",
    messagingSenderId: "870131977574",
    appId: "1:870131977574:web:fe492571c70ac61cc90ca7"
  };

  firebase.initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount("#app");
