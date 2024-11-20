

async function fetchOffers() {
    
    const offersContainer = document.getElementById("offersContainer"); //Récupère le container
    offersContainer.innerHTML = "Loading..."; // Vide le contenu du container
    
    const response = await fetch("https://codepassport.dev/api/offers");
    const offers = await response.json();

    offersContainer.innerHTML = ""; // Vide le contenu du container

    
    offers.forEach((offer) => { //Boucle forEach pour parcourir le tableau offers
        const offerElement = document.createElement("div"); //On crée un élément HTML
        offerElement.className = "offer"; //On lui donne une classe
        offerElement.innerHTML = `                           
            <h2 class="titre">Titre : ${offer.titre}</h2>
            <p class="technologie">Technologie : ${offer.technologie}</p>
            <p class="description">Description : ${offer.description}</p>`; //On injecte les contenus dans l'élément HTML, dans des balises différentes
        offersContainer.appendChild(offerElement); // 
    });
}

fetchOffers();

//async function fetchOffers() {
//     // URL correcte
//     const response = await fetch("https://codepasport.dev/api/offers");

//     // Récupère le conteneur pour afficher les erreurs
//     const errorContainer = document.getElementById("errorContainer");
//     errorContainer.innerHTML = ""; // Vide le contenu du conteneur des erreurs

//     if (!response.ok) {
//         // Affiche un message d'erreur si la réponse n'est pas OK
//         const errorElement = document.createElement("div");
//         errorElement.className = "error";
//         errorElement.innerHTML = `<p>Erreur lors de la récupération des données. Statut : ${response.status}.</p>`;
//         errorContainer.appendChild(errorElement); 
//         console.error(`Erreur HTTP : ${response.status}`);
//         return; // Quitte la fonction
//     }

//     // Parse les données JSON
//     const offers = await response.json();

//     // Récupère le conteneur pour afficher les offres
//     const offersContainer = document.getElementById("offersContainer");
//     offersContainer.innerHTML = ""; // Vide le contenu du conteneur des offres

//     // Parcourt et affiche chaque offre
//     offers.forEach((offer) => {
//         const offerElement = document.createElement("div");
//         offerElement.className = "offer";
//         offerElement.innerHTML = `
//             <h2 class="titre">Titre : ${offer.titre}</h2>
//             <p class="technologie">Technologie : ${offer.technologie}</p>
//             <p class="description">Description : ${offer.description}</p>`;
//         offersContainer.appendChild(offerElement);
//     });
// }

// // Appelle la fonction pour récupérer et afficher les offres
// fetchOffers();

// async function fetchOffers() {
//     const response = await fetch("https://codepassport.dev/api/offers");
    
// }
// const offers = await response.json();
//     console.log(offers)

// fetchOffers();

// const offersContainer = document.getElementById("offersContainer");
// offersContainer.innerHTML = "";
// offers.forEach((offer) => {
//     const offerElement = document.createElement("div");
//     offerElement.className = "offer";
//     offerElement.innerHTML = `
//     <h2 class="titre">${offer.titre}</h2>
//     <p class="technologie">${offer.technologie}</p>
//     <p class="description">${offer.description}</p>`;
//     offersContainer.appendChild(offerElement)
// });

// for(let i = 0; i < offers.lenght; i++){
//     titreDuPoste.innerText += offers[i].titre;
//     techno.innerText += offers[i].technologie;
//     resume.innerHTML += offers[i].description;
// }


// const offersContainer = document.getElementById("offers-container");
//     offersContainer.innerHTML = "";
//     dataOfApi.forEach((offer, index) => {
//         const offerElement = document.createElement("div");
//         offerElement.className = "offer";
//         offerElement.innerHTML = `
//         <h3 class="titre">${offer.titre}</h3>
//         <p class="technologie">Technologie : ${offer.technologie}</p>
//         <p class="description">${offer.description}</p>
//     `;
//     offersContainer.appendChild(offerElement);

// async function fetchOffers() {
//     const response = await fetch("https:codepassport.dev/api/offers");
//     const offers = await response.json();
//     const titreDuPoste = document.getElementsByClassName("titre")[0];
//     const techno = document.getElementsByClassName("technologie")[0];
//     const resume = document.getElementsByClassName("description")[0];
//     titreDuPoste.innerText += offers[1].titre;
//     techno.innerText += offers[1].technologie;
//     resume.innerHTML += offers[1].description;
// }

// fetchOffers();

// for(let i = 0; i < offers.lenght; i++){
//     titreDuPoste.innerText += offers[i].titre;
//     techno.innerText += offers[i].technologie;
//     resume.innerHTML += offers[i].description;
// }


//document.body.onload = addElement;
// function addH2() {

// const newh2 = document.createElement("h2"); // create a new div element
  

// const newTitre = document.createElement(offers[i].titre); // and give it some content
  
// // add the text node to the newly created div
// newh2.appendChild(newTitre);
  
// // add the newly created element and its content into the DOM
// const currentDiv = document.getElementById("h2");
// document.body.insertAfter(newh2, currentDiv);
// }

// addH2()




// titreDuPoste.innerText += `Titre du poste : ${titre}`;
// techno.innerHTML += `Technologie : ${technologie}`;
// resume.innerHTML += `Description : ${description}`;



