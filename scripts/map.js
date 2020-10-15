const options = {
    // dragging: false,
    // touchZoom: false,
    // doubleClickZoom: false,
    // scrollWheelZoom: false,
    // zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-3.7428317,-38.5422904], 15);
// setView: ([latitude,longitude],zoom)


// create and add titleLayer
L
.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./images/icon-local.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})


// create and add Marker
L
.marker([-3.7428317,-38.5422904],{icon})
.addTo(map)
