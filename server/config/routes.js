module.exports = (app) => {
    const express = require('express')

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());

    const authorsController = require('../controllers/authors')

    app.get('/getAll', (res,req) => {
        authorsController.getAll(res,req);
    });
    app.get('/getById/:id', (res,req) => {
        authorsController.getById(res,req);
    });
    app.post('/createNew', (res,req) => {
        authorsController.createNew(res,req);
    });
    app.put('/update/:id', (res,req) => {
        authorsController.update(res,req);
    });
    app.delete('/delete/:id', (res,req) => {
        authorsController.delete(res,req);
    });
}