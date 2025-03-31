async function fetchPokemonWeight(pokemonName) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // fetch the api
  const data = await res.json(); // get the response as json
  return data.weight / 10; // convert weight to kg
}

async function checkLuggageLimit() {
  const startTime = performance.now();
  let weights = await Promise.all([
    fetchPokemonWeight("snorlax"),
    fetchPokemonWeight("pikachu"),
    fetchPokemonWeight("ditto"),
    fetchPokemonWeight("bulbasaur"),
  ]);
  let totalWeight = weights.reduce((a, b) => a + b, 0);
  console.log(`Total weight: ${totalWeight}kg`);
  console.log(`Execution time: ${performance.now() - startTime}ms`);
}

checkLuggageLimit();

// async function checkLuggageLimit() {
//   const startTime = performance.now();
//   let totalWeight = 0;
//   totalWeight += await fetchPokemonWeight("snorlax");
//   totalWeight += await fetchPokemonWeight("pikachu");
//   totalWeight += await fetchPokemonWeight("ditto");
//   totalWeight += await fetchPokemonWeight("bulbasaur");
//   console.log(`Total weight: ${totalWeight}kg`);
//   console.log(`Execution time: ${performance.now() - startTime}ms`);
// }

// checkLuggageLimit();
