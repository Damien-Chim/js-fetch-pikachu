// // then catch method
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     // fetch function is promise based, add .then and .catch method

//     // the .then method will return a response object
//     .then(response => {
//         // convert the response object to json format using the json method
//         return response.json() 
//     })
//     // the json method will return the data
//     .then(data => {
//         console.log(`Pokemon character name: ${data.name}`)
//         console.log(`${data.name}'s weight: ${data.weight} pokemon weight units`)
//         console.log(`${data.name}'s height: ${data.height} pokemon height units`)
//     })
    
//     // the catch function will return an error, console log the error 
//     .catch(error => {
//         console.log(error)
//     }) 


const submit = document.getElementById('submit')
submit.addEventListener("click", () => {
    const characterName = document.getElementById('inputField').value.toLowerCase()
    fetchData(characterName)
})

// async await method
async function fetchData(characterName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${characterName}`)
        const data = await response.json()
        console.log(data)
        const pokemonSprite = data.sprites.front_shiny
        imageElement = document.getElementById("pokemonSprite")
        imageElement.src = pokemonSprite
        imageElement.style.display = "block"
    }
    catch(error) {
        console.log(error)
    }
}