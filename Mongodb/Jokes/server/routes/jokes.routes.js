const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/joke/:id', JokesController.findOneJoke);
    app.post('/api/joke', JokesController.createJoke);
    app.put('/api/joke/:id', JokesController.updateJoke);
    app.delete('/api/joke/:id', JokesController.deleteJoke);
}