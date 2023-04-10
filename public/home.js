let create = false;

// Create Map through Leaflet and OpenStreetMap API
const containerEl = document.querySelector("#map");
const map = L.map(containerEl).setView([40.24, -111.68], 10.75);

function makemap(url, zoom, attribution) {
  Promise.resolve(url)
    .then((tileUrl) => {
      const tileLayer = L.tileLayer(tileUrl, {
        maxZoom: zoom,
        attribution: attribution
      });
      tileLayer.addTo(map);
    });
}

makemap('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 18, '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>');


// Create Custom Buttons for Controlling when Marker is created
L.Control.MyButtons = L.Control.extend({
  onAdd: () => {
    const container = L.DomUtil.create("div", "my-buttons");
    const readButton = L.DomUtil.create("button", "my-read-button", container);
    readButton.innerHTML = "Read";
    readButton.onclick = function(event) {
      create = false;
      event.preventDefault();
    };
    const makeButton = L.DomUtil.create("button", "my-make-button", container);
    makeButton.innerHTML = "Make";
    makeButton.onclick = function(event) {
      create = true;
      event.preventDefault();
    };
    return container;
  },
});

L.control.myButtons = function(opts) {
  return new L.Control.MyButtons(opts);
};
L.control.myButtons({ position: "topleft" }).addTo(map);



const markerLayer = L.layerGroup().addTo(map);

// Load entries from MongoDB or Localstorage
async function loadEntries() {
  let entries = [];
  try {
    const response = await fetch('/api/entries');
    entries = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('entries', JSON.stringify(scores));
  } catch {
    // If there was an error then just use the last saved scores
    const entriesText = localStorage.getItem('entries');
    if (entriesText) {
      entries = JSON.parse(entriesText);
    }
  }
  displayEntries(entries);
}

// Display loaded entries
async function displayEntries(entries) {
  entries.forEach((point) => {
    const marker = L.marker([point.latitude, point.longitude]);
    marker.bindPopup(`<p>${point.textcontent}</p>`);
    markerLayer.addLayer(marker);
    }
  )};

loadEntries();


// Function that makes markers and popups
// Kinda nerfed, if have time can add editing with put, deleting with delete, 
// ownership, bigger descriptions with different way of submitting
map.on('click', (e) => {
  if (create) {
    const marker = L.marker(e.latlng);
    marker.bindPopup("<p>Share Something</p>");
    markerLayer.addLayer(marker);
    const popup = marker.getPopup();
    const input = window.prompt("Enter Description:");
    if (input != null) {
      popup.setContent(`<p>${input}</p>`);

      const entry = {
        textcontent: input,
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
      };
      saveScore(entry);
    } 
    else {
      markerLayer.removeLayer(marker);
    }
  }
});


// Saves scores to local storage and MongoDB
async function saveScore(entry) { 

  try {
    const response = await fetch('/api/entry', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(entry),
    });

    const entries = await response.json();
    localStorage.setItem('entries', JSON.stringify(entries));

  } catch {
    // If there was an error then just track scores locally
    updateScoresLocal(entry);
  }
}


function updateScoresLocal(newEntry) {
  let entries = [];
  const entriesText = localStorage.getItem('entries');
  if (entriesText) {
    entries = JSON.parse(entriesText);
  }
  entries.push(newEntry);
  localStorage.setItem('entries', JSON.stringify(entries));
}


// Websocket Geographic location display

let locationobject = {}


configureWebSocket();


const circleLayer = L.layerGroup().addTo(map);

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(getpositionme, failposition)
  }
}


function getpositionme(pos) {

  ID = localStorage.getItem('userName')
  if (locationobject.hasOwnProperty(ID)) {
    map.removeLayer(locationobject[ID]);
  }

  let position = pos.coords;
  const circle = L.circle([position.latitude, position.longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  });

  circle.bindPopup('User Location');
  circleLayer.addLayer(circle);

  locationobject[ID] = circle;

  // Send the latitude and longitude values as a message through websockets
  broadcastEvent(ID, position);
}

function failposition() {
  alert('Unable to get your location. Please enable geolocation in your browser.');
}


geolocate();


function getpositionyou(ID, pos) {

  if (locationobject.hasOwnProperty(ID)) {
    map.removeLayer(locationobject[ID]);
  }

  let position = pos.coords;
  const circle = L.circle([position.latitude, position.longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  });

  circle.bindPopup('User Location');
  circleLayer.addLayer(circle);
  locationobject[ID] = circle;
}


function removeLocationMarker(userId) {


  const circle = locationLayers[userId];
  if (circle) {
    map.removeLayer(circle);
    delete locationLayers[userId];
  }
}



function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  socket.onopen = (event) => {
    geolocate();
  };
  socket.onclose = (event) => {
    removeLocationMarker();
  };
  socket.onmessage = async (event) => {
    const location = JSON.parse(message);
    getpositionyou(location[0], location[1]);
  };
}


function broadcastEvent(ID, pos) {
  const event = {
    ID: ID,
    position: pos
  };
  socket.send(JSON.stringify(event));
}











//Function that creates dot


//Function that creates text box popup, maybe is called by dot function


//Function that closes out of current text box also allows you to favorite it, maybe make it a class or object but idk we'll see


//Function that allows you to search for activities by category

//Function that allows you to zoom with slider

//Function that allows you to swipe left or right on screen