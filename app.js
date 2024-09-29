let map;
let servicePoints = [
    { name: "Bike Service Center A", lat: 23.7808875, lng: 90.2792371, phone: "0123456789" },
    { name: "Bike Repair B", lat: 23.7771761, lng: 90.2879224, phone: "0987654321" },
    { name: "Quick Fix Garage", lat: 23.7870872, lng: 90.2800735, phone: "1234567890" }
];

// Initialize Google Map
function initMap() {
    const dhaka = { lat: 23.7808875, lng: 90.2792371 }; // Default location (Dhaka)
    map = new google.maps.Map(document.getElementById("map"), {
        center: dhaka,
        zoom: 13
    });

    // Add Service Points as Markers
    servicePoints.forEach(point => {
        const marker = new google.maps.Marker({
            position: { lat: point.lat, lng: point.lng },
            map: map,
            title: point.name
        });
    });

    displayServicePoints();
}

// Display Service Points in List
function displayServicePoints() {
    const serviceList = document.getElementById("service-points");
    servicePoints.forEach(point => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${point.name}</h3>
            <p>Contact: ${point.phone}</p>
            <button onclick="makeCall('${point.phone}')">Call Service</button>
            <button onclick="sendRequest('${point.name}')">Request Assistance</button>
        `;
        serviceList.appendChild(listItem);
    });
}

// Modal Controls
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Handle Service Requests
function makeCall(phoneNumber) {
    alert(`Dialing ${phoneNumber}...`);
}

function sendRequest(serviceName) {
    alert(`Request sent to ${serviceName}. They will contact you shortly.`);
}
