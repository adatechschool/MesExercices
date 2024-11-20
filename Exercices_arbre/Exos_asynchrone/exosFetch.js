//https://api.blablagues.net

// async function getJokes() {
//     const response = await fetch("https://api.blablagues.net")
//     const jokes = await response.json()
//     console.log("Question :", jokes.data.content.text_head)
//     console.log("Réponse :", jokes.data.content.text_hidden)
// }
// getJokes()




// fetch("https://api.blablagues.net")
//     .then(toto => toto.json()
//         .then(dataJson => {
//             console.log(dataJson)
//         }))      


async function getLyon7(){
        const response = await fetch ("https://api.zippopotam.us/fr/69007");
        const dataLyon7 = await response.json();
        console.log(dataLyon7.places[0].longitude);
        console.log(dataLyon7.places[0].latitude);
        console.log(dataLyon7.places[0]["place name"]);
    } 
getLyon7()