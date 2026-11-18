const axios = require('axios')

function randomPositiveInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

axios.get('https://ozarktechwebdev.com/api/jokes.json')
    .then((res) => {
        var jokeNum = randomPositiveInt(0,19)
        console.log(res.data)
        console.log(`Here's a developer joke for today:\n\nQ: ${res.data.jokes[jokeNum].question}\nA: ${res.data.jokes[jokeNum].answer}`)
    })
    .catch((err) => {
        console.log('Could not fetch a joke. Try again later.')
    })

