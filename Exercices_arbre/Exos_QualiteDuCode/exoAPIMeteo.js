// const cities = [
//     {
//         "latitude": 48.8534, "longitude": 2.3488, "city": "Paris"
//     },
//     {
//         "latitude": 45.75, "longitude": 4.85, "city": "Lyon"
//     },
//     {
//         "latitude": 47.2173, "longitude": -1.5534, "city": "Nantes"
//     },
//     {
//         "latitude": 43.3, "longitude": 5.4, "city": "Marseille"
//     },
//     {
//         "latitude": 50.633333, "longitude": 3.066667, "city": "Lille"
//     }
// ];

const fetchWeather = async (latitude, longitude, city) => {
  let response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain`
  );
  let json = await response.json();

  console.log(json.current.rain);
  document.getElementById(`pluie_${city}`).innerHTML =
    "<strong>" + json.current.rain + "</strong>";
  document.getElementById(`degres_${city}`).innerHTML =
    "<strong>" + json.current.temperature_2m + "</strong>";
};

//const LAT_LYON = 45.75;
//const LONG_LYON = 4.85;

//   resp = await fetch(
// `https://api.open-meteo.com/v1/forecast?latitude=${LAT_LYON}&longitude=${LONG_LYON}&current=temperature_2m,rain`
//   );

//   json = await resp.json();

//   console.log(json.current.rain);
//   document.getElementById("pluie_lyon").innerHTML =
//     "<strong>" + json.current.rain + "</strong>";
//   document.getElementById("degres_lyon").innerHTML =
//     "<strong>" + json.current.temperature_2m + "</strong>";

//   const LAT_NANTES = 47.2173;
//   const LONG_NANTES = -1.5534;

//   resp = await fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${LAT_NANTES}&longitude=${LONG_NANTES}&current=temperature_2m,rain`
//   );

//   json = await resp.json();

//   console.log(json.current.rain);
//   document.getElementById("pluie_nantes").innerHTML =
//     "<strong>" + json.current.rain + "</strong>";
//   document.getElementById("degres_nantes").innerHTML =
//     "<strong>" + json.current.temperature_2m + "</strong>";

//   const LAT_MARSEILLE = 43.3;
//   const LONG_MARSEILLE = 5.4;

//   resp = await fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${LAT_MARSEILLE}&longitude=${LONG_MARSEILLE}&current=temperature_2m,rain`
//   );

//   json = await resp.json();

//   console.log(json.current.rain);
//   document.getElementById("pluie_marseille").innerHTML =
//     "<strong>" + json.current.rain + "</strong>";
//   document.getElementById("degres_marseille").innerHTML =
//     "<strong>" + json.current.temperature_2m + "</strong>";

//   const LAT_LILLE = 50.633333;
//   const LONG_LILLE = 3.066667;

//   resp = await fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${LAT_LILLE}&longitude=${LONG_LILLE}&current=temperature_2m,rain`
//   );

//   json = await resp.json();

//   console.log(json.current.temperature_2m);
//   document.getElementById("pluie_lille").innerHTML =
//     "<strong>" + json.current.rain + "</strong>";
//   document.getElementById("degres_lille").innerHTML =
//     "<strong>" + json.current.temperature_2m + "</strong>";
// };

fetchWeather(48.8534, 2.3488, "Paris");
fetchWeather(45.75, 4.85, "Lyon");
fetchWeather(47.2173, -1.5534, "Nantes");
fetchWeather(43.3, 5.4, "Marseille");
fetchWeather(50.633333, 3.066667, "Lille");
