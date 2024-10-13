// Import MarkerClusterer and AdvancedMarkerElement from the CDN
function initMap() {
    // Create map centered at some default location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: { lat: 46.619261, lng: -33.134766 },  // Center on some location
        mapId: '4137b9effc11dc76'
    });

    // List of marker locations (example)
    const locations = [
        { lat: 37.7749, lng: -122.4194 }, // San Francisco
        { lat: 34.0522, lng: -118.2437 }, // Los Angeles
        { lat: 40.7128, lng: -74.0060 },  // New York
        { lat: 51.5074, lng: -0.1278 },   // London
        { lat: 48.8566, lng: 2.3522 }     // Paris
    ];

    // Create markers using google.maps.marker.AdvancedMarkerElement
    const markers = locations.map(location => {
        return new google.maps.marker.AdvancedMarkerElement({
            position: location,
            map: map
        });
    });

    // Use MarkerClusterer from @googlemaps/markerclusterer CDN
    new MarkerClusterer({ map, markers });

};

window.initMap = initMap;