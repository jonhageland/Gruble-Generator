// 1. De 20 offisielle Gruble-bokstavene (Vanskelige bokstaver fjernet, 1 av hver, ingen blank)
const bokstaver = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'V'];

// 2. En god bunke med klassiske og morsomme norske kategorier
const kategorier = [
    "Noe man har på brødskiva",
    "Et jentenavn",
    "Et guttenavn",
    "Dyr i havet",
    "Land i verden",
    "Bilmerke",
    "Noe som er gult",
    "Ting på et bad",
    "By i Norge",
    "Frukt eller grønnsak",
    "Yrke/Jobb",
    "Noe man kan drikke",
    "Kjendis (Fornavn eller etternavn)",
    "Hobby eller fritidsaktivitet",
    "Noe som lager lyd",
    "Dette finnes på kjøkkenet",
    "Film eller TV-serie",
    "Klesplagg",
    "Noe som er skummelt",
    "Ting som finnes i skogen",
    "Merkevare (Butikk, mat, app osv.)",
    "Verktøy eller kjøkkenredskap"
];

// Henter elementene fra HTMLen
const letterDisplay = document.getElementById('letter-display');
const categoryDisplay = document.getElementById('category-display');
const spinButton = document.getElementById('spin-button');

// Funksjon som kjører når du trykker på knappen
spinButton.addEventListener('click', () => {
    
    // Legger til en kjapp "rulle-effekt" ved å blinke teksten
    letterDisplay.style.opacity = 0.3;
    categoryDisplay.style.opacity = 0.3;
    
    setTimeout(() => {
        // Velger en helt tilfeldig bokstav fra de 20 tilgjengelige
        const tilfeldigBokstav = bokstaver[Math.floor(Math.random() * bokstaver.length)];
        
        // Velger en helt tilfeldig kategori fra listen
        const tilfeldigKategori = kategorier[Math.floor(Math.random() * kategorier.length)];
        
        // Oppdaterer skjermen med de nye verdiene
        letterDisplay.textContent = tilfeldigBokstav;
        categoryDisplay.textContent = tilfeldigKategori;
        
        // Setter synligheten volta tilbake til normalt
        letterDisplay.style.opacity = 1;
        categoryDisplay.style.opacity = 1;
    }, 150); // 150 millisekunder forsinkelse for effektens skyld
});