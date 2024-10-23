const buttonCounter = document.querySelector('#counter')

let count = 0

buttonCounter.addEventListener('click', () => {
    count += 1; // count++ ou count = count + 1
    newButton.style.background = "red"
    buttonCounter.innerText = count + "clics !"
})

/* //document.querySeletor("#counter")
const button = document.getElementById("counter")
let count = 0;
button.addEventListener("click", () => {
    count++; // count = count + 1 ou count + = 1
    button.textContent = count + "clics!"
    //button.innerText = count + "clics!"
}) */

// Je veux créer un bouton en JS 
const div = document.getElementById("reset")
const newButton = document.createElement("button");
div.appendChild(newButton)

newButton.innerText = "Reset"

newButton.addEventListener('click', () => {
count = 0
newButton.style.background = "green"
buttonCounter.innerText = count + " clics !"
})

newButton.style.color = "white"
newButton.style.background = "green"
newButton.style.marginTop = "10px"

buttonCounter.textContent = "Click !"

const divContent = document.getElementById("content")
const h1 = document.createElement("h1")
divContent.appendChild(h1)

h1.innerText = count
h1.style.color = "blue"



const horoscope = [
    {
      sign: 'Bélier',
      description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
    },
    {
      sign: 'Taureau',
      description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
    },
    {
      sign: 'Gémeaux',
      description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
    },
    {
      sign: 'Cancer',
      description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
    }
  ];
  
  // TODO: recupère l'élément <div id="horoscope">

  const elementHoroscope = document.querySelector('#horoscope');

  
  for (const item of horoscope) {

        elementHoroscope.innerHTML += 
        `<article>
        <h2>${item.sign}</h2>
        <p>${item.description}</p>
        </article>`
      // TODO: remplace le console.log par le code qui ajoute un article
      // pour chaque item avec le format suivant :
      // <article>
      //   <h2>Sign</h2>
      //   <p>Description</p>
      // </article>
      //console.log(item.sign, item.description);
  }


  /* //Correction Maud
  //document.querySeletor("#counter")
const body = document.querySelector("body");
const button = document.getElementById("counter")
let count = 0;
button.addEventListener("click", () => {
    count++; // count = count + 1 ou count + = 1
    button.textContent = "Click ! "
    h1.innerText=count
    h1.style.color = "purple"
    newButton.style.background = "red"
    //button.innerText = count + "clics!"
})
// Je veux créer un bouton en JS 
const div = document.getElementById("reset")
const newButton = document.createElement("button");
div.appendChild(newButton)
newButton.innerHTML = "Reset"
newButton.addEventListener("click", () => {
    count = 0
    newButton.style.background = "green"
    h1.innerText=count
    h1.style.color = "red"
})
newButton.style.color = "white"
newButton.style.background = "red"
newButton.style.marginTop="10px"
//Changer le text du premier bouton en "Click ! "
// Créer une balise h1 avec le contenu du counter dans la div "content"
// Changer de couleur du h1 quand on click sur le bouton d'incrément (choisir couleur)
// Changer de couleur h1 à rouge quand on click sur le bouton reset 
const div1 =  document.getElementById("content")
const h1 = document.createElement("h1");
div1.appendChild(h1) */







