let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 24.8054, lng: 125.2811 },
    zoom: 12,
  });

  // const marker1 = new google.maps.Marker({
  //   position: uluru,
  //   map: map,
  // });
}
