//
console.log("hello");

const pokemonNames = ["フシギダネ", "フシギソウ", "フシギバナ", "ヒトカゲ", "リザード", "リザードン", "ゼニガメ", "カメール", "カメックス"];
const ohtaniA = ["大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平"];
const digMenber = ["あびるまん", "たまろーさん", "えりこさん", "こたろーさん", "kikiさん", "みずきさん", "ありささん", "つばささん", "ゆーすけさん", "みくさん", "かけるさん", "りこさん"];

const extraObj = {
    大谷翔平: { img: "images/ohtani.jpeg", name: "大谷翔平", type: "ああ", hight: "いい", weight: "うう", explain: "大" },
    あびるまん: { img: "images/abiru.png", name: "あびるまん", type: "", hight: "？？", weight: "？？", explain: "" },
    たまろーさん: { img: "", name: "たまろーさん", type: "", hight: "？？", weight: "？？", explain: "" },
    えりこさん: { img: "", name: "えりこさん", type: "", hight: "？？", weight: "？？", explain: "" },
    こたろーさん: { img: "", name: "こたろーさん", type: "", hight: "？？", weight: "？？", explain: "" },
    kikiさん: { img: "", name: "kikiさん", type: "", hight: "？？", weight: "？？", explain: "" },
    みづきさん: { img: "", name: "みづきさん", type: "", hight: "？？", weight: "？？", explain: "" },
    ありささん: { img: "", name: "ありささん", type: "", hight: "？？", weight: "？？", explain: "" },
    つばささん: { img: "", name: "つばささん", type: "", hight: "？？", weight: "？？", explain: "" },
    ゆーすけさん: { img: "", name: "ゆーすけさん", type: "", hight: "？？", weight: "？？", explain: "" },
    みくさん: { img: "", name: "みくさん", type: "", hight: "？？", weight: "？？", explain: "" },
    かけるさん: { img: "", name: "かけるさん", type: "", hight: "？？", weight: "？？", explain: "" },
    りこさん: { img: "", name: "りこさん", type: "", hight: "？？", weight: "？？", explain: "" },
}

function pokeSelectAp() {
    const pokeListEl = document.getElementById("pokeSelect");
    while (pokeListEl.lastChild) {
        pokeListEl.removeChild(pokeListEl.lastChild)
    }
    pokemonNames.forEach(element => {
        let opttionEl = document.createElement("option");
        opttionEl.value = element;
        opttionEl.textContent = element;
        pokeListEl.appendChild(opttionEl);
    });
}

function ohtani() {
    const pokeListEl = document.getElementById("pokeSelect");
    while (pokeListEl.lastChild) {
        pokeListEl.removeChild(pokeListEl.lastChild)
    }
    ohtaniA.forEach(element => {
        let opttionEl = document.createElement("option");
        opttionEl.value = element;
        opttionEl.textContent = element;
        pokeListEl.appendChild(opttionEl);
    });
}

function dig() {
    const pokeListEl = document.getElementById("pokeSelect");
    while (pokeListEl.lastChild) {
        pokeListEl.removeChild(pokeListEl.lastChild)
    }
    digMenber.forEach(element => {
        let opttionEl = document.createElement("option");
        opttionEl.value = element;
        opttionEl.textContent = element;
        pokeListEl.appendChild(opttionEl);
    });
}

window.addEventListener("load", () => {
    pokeSelectAp()
    // console.log("event");
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
    console.log(digMenber.indexOf(pokeName) !== -1, "aaaa", pokeName === "大谷翔平");
    console.log(extraObj[pokeName]);
    if (digMenber.indexOf(pokeName) !== -1 || pokeName === "大谷翔平") {
        pokePic = extraObj[pokeName].img;
        pokeType = extraObj[pokeName].type;
        pokeHight = extraObj[pokeName].height;
        pokeWeight = extraObj[pokeName].weight;
        pokeExp = extraObj[pokeName].explain;
    } else {
        const pokeNo = pokemonNames.indexOf(pokeName) + 1;

        await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokeNo).then(res => res.json())
            .then(json => {
                pokeWeight = json.weight;
                pokeHight = json.height
                pokePic = json.sprites.other["official-artwork"]["front_default"];
                pokeSpeUrl = json.species.url;
            })
        console.log("promise", pokeHight, pokeWeight, pokePic);

        await fetch(pokeSpeUrl).then(res => res.json())
            .then(json => {
                pokeType = json.genera.find(lag => lag.language.name === "ja").genus;
                pokeExp = json.flavor_text_entries.filter(obj => obj.language.name === "ja" && obj.version.name === "x")[0].flavor_text
            })
    }
    console.log(pokeExp[0]);
    // const imageEl = document.getElementById("pokePic");
    // const imageEl = document.createElement("img");
    // imageEl.id = "pokeImg"
    // imageEl.src = pokePic;
    // imageEl.width = 300
    // document.getElementById("pokePic").append(imageEl);

    document.getElementById("pokeImg").src = pokePic;
    document.getElementById("pokeImg").width = 300;
    document.getElementById("pokeType").innerText = pokeType;
    document.getElementById("pokeExp").innerText = pokeExp;
    document.getElementById("pokeName").innerText = pokeName;
    document.getElementById("pokeHight").innerText = pokeHight + " m";
    document.getElementById("pokeWeight").innerText = pokeWeight + " Kg";
}

// function findUnderWeight(weight) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`).then(res => res.json())
//         .then(json => json.results.map(obj => fetch(obj.url).then(res => res.json())))
//         .then(arr => Promise.all(arr).then(res => res.filter(elm => Number(elm.weight) < weight)));
// }