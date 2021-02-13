const  {Author}  = require('../models/author.model');
module.exports.findAllAuthor = (request, response) => {
    Author.find()
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.json({ massage: "Somthing went wrong", error: err}))

    };



    module.exports.createAuthor = (request, response) => {
    
    Author.create( request.body)
        .then(author => response.json(author))
        .catch(err => response.json(err));
};