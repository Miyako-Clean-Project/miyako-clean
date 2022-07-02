// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
  getAnalytics,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHPeT9O1zXx0C1FSTZ0J-fUUA7BnX1Hxg",
  authDomain: "miyako-clean-app.firebaseapp.com",
  projectId: "miyako-clean-app",
  storageBucket: "miyako-clean-app.appspot.com",
  messagingSenderId: "550216961810",
  appId: "1:550216961810:web:04f15f578ed1f818932dcb",
  measurementId: "G-YNL0P4RKFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

let map
let data
let markers = []

window.initMap = initMap
// window.addEventListener("DOMContentLoaded", onload)

// async function onload() {
//   console.log("aaaaa")
//   const docs = await getDocs(collection(firestore, "reports"))
//   data = []
//   console.log(docs)
//   docs.forEach((doc) => {
//     data.push(doc.data())
//   })
//   updateMakers()
// }

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 24.8054, lng: 125.2811 },
    zoom: 12,
  });
  updateMakers()

}

function updateMakers () {
  const pos = [
    { lat: 24.8154, lng: 125.2711 },
    { lat: 24.8054, lng: 125.2811 }
  ]
  if (markers.length === 0 && map) {
    console.log(pos)
    for(const p of pos) {
      markers.push(new google.maps.Marker({
        position: p,
        map: map,
      }))
    }
  }
}
