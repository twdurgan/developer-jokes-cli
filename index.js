// Import modules
const axios = require('axios')

//Define functions
function randomPositiveInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

// Send a GET request via axios to the jokes URL
axios.get('https://ozarktechwebdev.com/api/jokes.json')
    // Success: Define a random integer between 0 and 19 (the size of the array of jokes returned)
    // Then print the question and answer for said joke
    .then((res) => {
        var jokeNum = randomPositiveInt(0,19)
        console.log(res.data)
        console.log(`Here's a developer joke for today:\n\nQ: ${res.data.jokes[jokeNum].question}\nA: ${res.data.jokes[jokeNum].answer}`)
    })
    // Failure: Inform the user that a joke could not be retrieved.
    .catch((err) => {
        console.log('Could not fetch a joke. Try again later.')
    })

