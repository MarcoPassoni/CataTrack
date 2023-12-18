window.addEventListener("load", function () {
  const apiUrl = "https://eonet.gsfc.nasa.gov/api/v3/categories/seaLakeIce";
  let map;

  fetch(apiUrl)
    .then(handleResponse)
    .then(displayMapWithIcebergs)
    .catch(handleError);

  function handleResponse(response) {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  }

  const dateSelector = this.document.querySelector("#annoSelect");
  let icebergsEvents;
  let markers = [];
  console.log(dateSelector);
  dateSelector.addEventListener("change", (e) => {
    let result = icebergsEvents.filter((data) => {
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

  function displayMapWithIcebergs(data) {
    const existingMap = document.getElementById("map");

    if (!map && existingMap) {
      map = initializeMap(existingMap);
    }

    if (data && data.events) {
      icebergsEvents = data.events;
      icebergsEvents.forEach((event) => {
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
        worldCopyJump: false,
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
      const coordinates = event.geometry[0].coordinates;
      const eventName = event.title;
      const eventDate = new Date(event.geometry[0].date).toLocaleString();
      const eventDescription =
        event.categories[0].description || "Nessuna Descrizione";
      const eventCategory = event.categories[0].title;

      const magnitudeValue = event.geometry[0].magnitudeValue;
      const magnitudeUnit = event.geometry[0].magnitudeUnit;

      const eventStatus = event.closed ? "Non Attivo" : "Attivo";

      const sources = event.sources.map(
        (source) => `<a href="${source.url}" target="_blank">${source.id}</a>`
      );

      const popupContent = `
          <div>
            <h3>${eventName}</h3>
            <hr>
            <p><strong>Data:</strong> ${eventDate}</p>
            <p><strong>Descrizione:</strong> ${eventDescription}</p>
            <p><strong>Categoria:</strong> ${eventCategory}</p>
            <hr>
            <p><strong>Magnitudo:</strong> ${magnitudeValue || "N/A"} ${
        magnitudeUnit || ""
      }</p>
            <p><strong>Stato:</strong> ${eventStatus}</p>
            <p><strong>Fonti:</strong> ${sources}</p>
            <p><strong>Link:</strong> <a href="${event.link}" target="_blank">${
        event.link
      }</a></p>
          </div>
        `;

      const marker = createMarker(coordinates, eventCategory, popupContent);
      markers.push(marker);
      marker.addTo(map);
    }
  }

  function createMarker(coordinates, category, popupContent) {
    const icon = L.icon({
      iconUrl: "../img/iceberg.png",
      iconSize: [40, 60],
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
