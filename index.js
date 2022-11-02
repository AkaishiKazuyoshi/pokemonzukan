//
console.log("hello");

function findUnderWeight(weight) {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`).then(res => res.json())
        .then(json => json.results.map(obj => fetch(obj.url).then(res => res.json())))
        .then(arr => Promise.all(arr).then(res => res.filter(elm => Number(elm.weight) < weight)));
}