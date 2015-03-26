var user = require('../models/user-model.js');
module.exports = function (app) {
    
    app.post('/api/user/', function (req, res) {
        user.create(req.body, function (error, response) {
            if (error)
                res.status(500).send(error);
            res.status(200).send();
        });
    });
    
    app.get('/api/user/:id', function (req, res) {
        user.find({_id: req.params.id}, function (error, response) {
            if (error)
                res.status(500).send(error);
            res.json(response[0]);
        });
    });
    
    app.get('/api/user/', function (req, res) {
        user.find(function (error, data) {
            if (error)
                res.status(500).send(error);
            res.json(data);
        });
    }); 
    
    app.put('/api/user/:id', function (req, res) {
        user.findByIdAndUpdate(req.params.id, req.body, function (error, response) {
            if (error)
                res.status(500).send(error);
            res.status(200).send();
        });
    });         
   
    app.delete('/api/user/:id', function (req, res) {
        user.findByIdAndRemove(req.params.id, function (error, response) {
            if (error)
                res.status(500).send(error);
            res.status(200).send();
        });
    });
};