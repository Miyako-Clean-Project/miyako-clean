// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
  getAnalytics,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import {
  getFirestore,
  addDoc,
  collection,
  GeoPoint
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
let map;

window.submitReport = submitReport
window.initMap = initMap

function submitReport() {
    const report = document.forms.reportForm

    console.log(report.userName.value)
    console.log(report.amount.value)
    console.log(report.status.value)

    const kindList = {}
    for(let i = 0; i < report.kind.length; i++) {
      const kindName = report.kind[i].value
      const checked = report.kind[i].checked
      kindList[kindName] = checked
    }
    console.log(kindList)

    const centerPosition = map.getCenter()
    console.log(centerPosition)
    const location = new GeoPoint(centerPosition.lat(), centerPosition.lng())

    const newData = {
      userName: report.userName.value,
      amount: report.amount.value,
      status: report.status.value,
      kind: kindList,
      location: location
    }

    addDoc(collection(firestore, "reports"),newData)

}

function updatePosition(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  var latlng = new google.maps.LatLng(lat, lng);
  map.setCenter(latlng);
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 24.8054, lng: 125.2811 },
    zoom: 18,
  });
  navigator.geolocation.getCurrentPosition(updatePosition);
}
