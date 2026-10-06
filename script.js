const campingPlaetze = [
    {
        id: 1,
        ort: "Gardasee - Peschiera",
        name: "Camping Cappucini",
        url: "https://www.camp-cappuccini.com/de",
        datum: "12.7. bis 18.7.2023",
        adresse: "Via Arrigo Boito, 2, 37019 Peschiera del Garda, Verona",
        telefon: "+39 045 7551592",
        email: "info@camp-cappuccini.com",
        lat: 45.443100,
        lon: 10.683500,
        bilder: ["cappuccini1.jpg", "cappuccini2.jpg"],
        info: "Schöner Campingplatz am Gardasee."
    },
    {
        id: 2,
        ort: "Cuxhaven - Duhnen",
        name: "Campingplatz Beckmann-Duhnen",
        url: "https://beckmann-duhnen.de/",
        datum: "28.3. bis 1.4.2024",
        adresse: "Windeichenweg 32, 27476 Cuxhaven",
        telefon: "04721 65191",
        email: "info@beckmann-duhnen.de",
        lat: 53.878249,
        lon: 8.652325,
        bilder: ["beckmann1.jpg", "beckmann2.jpg"],
        info: "Ruhiger Platz nahe der Nordsee."
    },
    {
        id: 3,
        ort: "Nauheim",
        name: "Campingplatz Nauheim",
        url: "https://www.campingplatznauheim.de/",
        datum: "",
        adresse: "Seeweg 2, 64569 Nauheim",
        telefon: "17660494430",
        email: "",
        lat: 49.950819,
        lon: 8.473343,
        bilder: ["nauheim1.jpg", "nauheim2.jpg"],
        info: "Schöner Platz am See."
    },
    {
        id: 4,
        ort: "Diemelsee",
        name: "Campingplatz Seeblick Diemelsee",
        url: "https://www.diemelsee-camping.de",
        datum: "September 2024",
        adresse: "Auf dem Kampe 3a, 34519 Diemelsee – Heringhausen",
        telefon: "05633 993096",
        email: "info@diemelsee-camping.de",
        lat: 51.364167,
        lon: 8.729167,
        bilder: ["diemelsee1.jpg", "diemelsee2.jpg"],
        info: "Direkt am Diemelsee gelegen."
    },
    {
        id: 5,
        ort: "Kijkduin - Den Haag",
        name: "Vakantiepark Kijkduin",
        url: "https://www.roompot.nl/ferienparks/niederlande/suedholland/vakantiepark-kijkduin/",
        datum: "3.10 bis 7.10.2024",
        adresse: "Machiel Vrijenhoeklaan 450, 2555 NW Kijkduin",
        telefon: "+31 70 4482100",
        email: "",
        lat: 52.058895,
        lon: 4.210627,
        bilder: ["kijkduin1.jpg", "kijkduin2.jpg"],
        info: "Ferienpark direkt an der Nordsee."
    },
    {
        id: 6,
        ort: "Cuxhaven - Duhnen",
        name: "Campingplatz Beckmann-Duhnen",
        url: "https://beckmann-duhnen.de/",
        datum: "1.5. bis 5.5.2025",
        adresse: "Windeichenweg 32, 27476 Cuxhaven",
        telefon: "04721 65191",
        email: "info@beckmann-duhnen.de",
        lat: 53.878249,
        lon: 8.652325,
        bilder: ["beckmann2025_1.jpg", "beckmann2025_2.jpg"],
        info: "Wiederholung – beliebter Platz in Duhnen."
    },
    {
        id: 7,
        ort: "Koblenz",
        name: "KNAUS Campingpark Koblenz/Rhein-Mosel",
        url: "https://www.knauscamp.de/koblenz",
        datum: "23.5. bis 25.5.2025",
        adresse: "Schartwiesenweg 6, 56070 Koblenz",
        telefon: "+49 261 82719",
        email: "koblenz@knauscamp.de",
        lat: 50.3695,
        lon: 7.5948,
        bilder: ["koblenz1.jpg", "koblenz2.jpg"],
        info: "Campingplatz am Zusammenfluss von Rhein und Mosel."
    },
    {
        id: 8,
        ort: "Renesse",
        name: "Camping Julianahoeve",
        url: "https://www.julianahoeve.nl",
        datum: "2.10. bis 5.10.2025",
        adresse: "Hoogenboomlaan 42, 4325 DM Renesse",
        telefon: "+31 111 461414",
        email: "info@julianahoeve.nl",
        lat: 51.73088,
        lon: 3.754691,
        bilder: ["renesse1.jpg", "renesse2.jpg"],
        info: "Großer Familiencampingplatz nahe der Nordsee."
    },
    {
        id: 9,
        ort: "Kehl",
        name: "Camping Kehl",
        url: "https://www.campingpark-kehl.de/",
        datum: "30.4. bis 5.5.2026",
        adresse: "Rheindammstraße 1, 77694 Kehl",
        telefon: "+49 7851 2603",
        email: "info@campingpark-kehl.de",
        lat: 48.56627,
        lon: 7.807286,
        bilder: ["kehl1.jpg", "kehl2.jpg"],
        info: "Campingplatz direkt am Rhein."
    },
    {
        id: 10,
        ort: "Biggesee",
        name: "Vier Jahreszeiten – Freizeit-Oasen",
        url: "https://biggesee.freizeit-oasen.de",
        datum: "",
        adresse: "Am Sonderner Kopf 3, 57462 Olpe",
        telefon: "+49 2761 944111",
        email: "biggesee@freizeit-oasen.de",
        lat: 51.07436,
        lon: 7.85765,
        bilder: ["biggesee1.jpg", "biggesee2.jpg"],
        info: "Schöner Platz am Biggesee."
    }
];

// --- Karte erstellen ---
const map = L.map('map').setView([51.0, 9.0], 6);

// --- OSM Layer ---
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// --- Sidebar & Info ---
const list = document.getElementById("camping-list");
const infoBox = document.getElementById("info");

// --- Campingplätze einfügen ---
campingPlaetze.forEach((platz, index) => {
    const li = document.createElement("li");
    li.textContent = platz.name + " (" + platz.ort + ")";
    li.onclick = () => showInfo(index);
    list.appendChild(li);

    const marker = L.marker([platz.lat, platz.lon]).addTo(map);
    marker.on("click", () => showInfo(index));
});

// --- Info anzeigen ---
function showInfo(i) {
    const p = campingPlaetze[i];
    infoBox.innerHTML = `
        <h2>${p.name}</h2>
        <p><strong>Ort:</strong> ${p.ort}</p>
        <p><strong>Adresse:</strong> ${p.adresse}</p>
        <p><strong>Telefon:</strong> ${p.telefon}</p>
        <p><strong>E-Mail:</strong> ${p.email || "Keine Angabe"}</p>
        <p><strong>Datum:</strong> ${p.datum || "Keine Angabe"}</p>
        <p><strong>Webseite:</strong> <a href="${p.url}" target="_blank">${p.url}</a></p>
        <p>${p.info}</p>
        <img src="images/${p.bilder[0]}" width="200">
        <img src="images/${p.bilder[1]}" width="200">
    `;
}
