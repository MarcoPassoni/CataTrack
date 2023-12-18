window.addEventListener("load", function () {
  const apiUrl = "https://eonet.gsfc.nasa.gov/api/v3/categories/severeStorms";
  let map;

  fetch(apiUrl)
    .then(handleResponse)
    .then(displayMapWithHurricanes)
    .catch(handleError);

  function handleResponse(response) {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  }

  const dateSelector = this.document.querySelector("#annoSelect");
  let hurricanesEvents;
  let markers = [];
  console.log(dateSelector);
  dateSelector.addEventListener("change", (e) => {
    let result = hurricanesEvents.filter((data) => {
      return (
        new Date(data.geometry[0].date).getFullYear() == e.target.value ||
        e.target.value == "Tutto"
      );
    });
    markers.forEach((marker) => {
      map.removeLayer(marker);
    });
    result.forEach((r) => {
      displayMarkerOnMap(map, r);
    });
  });

  function displayMapWithHurricanes(data) {
    const existingMap = document.getElementById("map");

    if (!map && existingMap) {
      map = initializeMap(existingMap);
    }

    if (data && data.events) {
      hurricanesEvents = data.events;

      hurricanesEvents.forEach((event) => {
        displayMarkerOnMap(map, event);
      });
    }
  }

  function initializeMap(existingMap) {
    var southWest = new L.LatLng(-90, -180),
        northEast = new L.LatLng(90, 180),
        bounds = new L.LatLngBounds(southWest, northEast);

    var mapOption = {
        maxBounds: bounds,
        worldCopyJump: true,
        maxBoundsViscosity: 2,
        minZoom: 3
    };
    const map = L.map(existingMap, mapOption).setView([0, 0], 3);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    document.getElementById("container_loading").style.display = "none";
    return map;
  }

  function displayMarkerOnMap(map, event) {
    if (event.geometry && event.geometry.length > 0) {
      for (let i = 0; i < event.geometry.length; i++) {
        //costanti delle API
        //TODO: capire perchè descrizione è sempre null
        const coordinates = event.geometry[i].coordinates;
        const titolo = event.title;
        const data = new Date(event.geometry[i].date).toLocaleString();
        const descrizione = event.description || "Nessuna Descrizione";
        const eventCategory = event.categories[0].title;
        const magnitudeValue = event.geometry[i].magnitudeValue;
        const magnitudeUnit = event.geometry[i].magnitudeUnit;
        const sourceId = event.sources[0].id;
        const sourceUrl = event.sources[0].url;
        const trackDate = new Date(event.geometry[i].date).toLocaleString();
        const trackMagnitudeValue = event.geometry[i].magnitudeValue;
        const trackMagnitudeUnit = event.geometry[i].magnitudeUnit;
  
        const popupContent = `
          <div>
            <h3>${titolo}</h3>
            <hr>
            <p><strong>Data:</strong> ${data}</p>
            <p><strong>Descrizione:</strong> ${descrizione}</p>
            <p><strong>Categoria:</strong> ${eventCategory}</p>
            <hr>
            <p><strong>Magnitudo:</strong> ${magnitudeValue} ${magnitudeUnit}</p>
            <p><strong>Dati Ulteriori:</strong> <a href="${sourceUrl}" target="_blank">${sourceId}</a></p>
            <hr>
          </div>
        `;
  
        const marker = createMarker(coordinates, eventCategory, popupContent);
        markers.push(marker);
        marker.addTo(map);
      }
    }
  }

  function createMarker(coordinates, category, popupContent) {
    const icon = L.icon({
      iconUrl: "../img/uragano.png",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [-3, -32],
    });
  

    const latLng = L.latLng(coordinates[1], coordinates[0]);
    const point = map.latLngToLayerPoint(latLng);

    const marker = L.marker(map.layerPointToLatLng(point), { icon: icon });
    marker.bindPopup(popupContent);
    return marker;
  }

  function handleError(error) {
    console.error("Error: ", error);
  }
});