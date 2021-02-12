const Joke = require('../models/jokes.model')

module.exports.findAllJokes = (request, response) => {
    Joke.find({})
        .then(allJokes => response.json(allJokes))
        .catch(err => response.json(err));
}

module.exports.findOneJoke = (request, response) => {
    Joke.findOne({_id: request.params.id})
        .then(joke => response.json(joke))
        .catch(err => response.json(err));
}

module.exports.createJoke = (request, response) => {
    Joke.create(request.body)
        .then(joke => response.json(joke))
        .catch(err => response.json(err));
}

module.exports.updateJoke = (request, response) => {
    Joke.findOneAndUpdate(
        {_id: request.params.id},
        request.body
    )
        .then(updatedJoke => response.json(updatedJoke))
        .catch(err => response.json(err));
}

module.exports.deleteJoke = (request, response) => {
    Joke.deleteOne({_id: request.params.id})
        .then(result => response.json(result))
        .catch(err => response.json(err));
}