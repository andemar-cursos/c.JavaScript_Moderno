

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// Forma normal de hacer la peticion
// fetch(jokeUrl).then(resp => {
//     resp.json().then(console.log)
// })


// Forma corta
fetch(jokeUrl)
    .then( resp => resp.json())
    .then( (console.log) )
//  .then( ({id, value}) => console.log(`id: ${id} - value: ${value}`) );