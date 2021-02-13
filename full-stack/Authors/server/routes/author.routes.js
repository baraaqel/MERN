const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/getAllAuthors', AuthorController.findAllAuthor);
    app.post('/api/creatNetAuthor', AuthorController.createAuthor);
}