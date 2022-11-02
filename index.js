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
    console.log("event");
});

async function display() {
    const pokeEL = document.getElementById("pokeSelect");
    const pokeName = pokeEL.value;
    let pokeType;
    let pokeHight;
    let pokeWeight;
    let pokeExp;
    let pokePic;
    let pokeSpeUrl;

    const pokeNo = pokemonNames.indexOf(pokeName) + 1;

    await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokeNo).then(res => res.json())
        .then(json => {
            pokeWeight = json.weight;
            pokeHight = json.height
            pokePic = json.sprites.other["official-artwork"]["front_default"];
            pokeSpeUrl =  json.species.url;
        })
    console.log("promise", pokeHight, pokeWeight, pokePic);

    await fetch(pokeSpeUrl).then(res => res.json())
        .then(json => {
            pokeType = json.genera.find(lag => lag.language.name === "ja").genus;
            pokeExp = json.flavor_text_entries.filter(obj => obj.language.name === "ja" && obj.version.name === "x")[0].flavor_text
        })
    console.log(pokeExp[0]);
    // const imageEl = document.getElementById("pokePic");
    const imageEl = document.createElement("img");
    imageEl.src = pokePic;
    imageEl.width = 300
    document.getElementById("pokePic").append(imageEl);

    document.getElementById("pokeType").innerText += "   " + pokeType;
    document.getElementById("pokeExp").innerText += "   \n" + pokeExp;
    document.getElementById("pokeName").innerText += "  " + pokeName;
    document.getElementById("pokeHight").innerText += "  " + pokeHight + " m";
    document.getElementById("pokeWeight").innerText += "  " + pokeWeight + " Kg";
}

// function findUnderWeight(weight) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`).then(res => res.json())
//         .then(json => json.results.map(obj => fetch(obj.url).then(res => res.json())))
//         .then(arr => Promise.all(arr).then(res => res.filter(elm => Number(elm.weight) < weight)));
// }