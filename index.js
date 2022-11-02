//
console.log("hello");

const pokemonNames = ["フシギダネ", "フシギソウ", "フシギバナ", "ヒトカゲ", "リザード", "リザードン", "ゼニガメ", "カメール", "カメックス"];

window.addEventListener("load", () => {
const pokeListEl = document.getElementById("pokeSelect");
  pokemonNames.forEach(element => {
    let opttionEl = document.createElement("option");
    opttionEl.value = element;
    opttionEl.textContent = element;
    pokeListEl.appendChild(opttionEl);
  });
});

async function display() {
    const pokeEL = document.getElementById("pokeSelect");
    const pokeName = pokeEL.value;
    let pokeType;
    let pokeHight;
    let pokeWeight;
    let pokeExp;
    let pokePic;

    const pokeNo = pokemonNames.indexOf(pokeName);

    await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokeNo).then(res => res.json())
        .then(json => {
            pokeWeight = json.weight;
            pokeHight = json.height
            pokePic = json.sprites.other.official-artwork.front_default;
        })

}

function findUnderWeight(weight) {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`).then(res => res.json())
        .then(json => json.results.map(obj => fetch(obj.url).then(res => res.json())))
        .then(arr => Promise.all(arr).then(res => res.filter(elm => Number(elm.weight) < weight)));
}