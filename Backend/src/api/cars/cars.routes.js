const CarsRoutes = require('express').Router();
const { getAllCars, getCarsById, createCar } = require('./cars.controller');

CarsRoutes.get('/getAllCars', getAllCars);
CarsRoutes.get('/getCarsById/:id', getCarsById);
CarsRoutes.post('/createCar', createCar);

module.exports = CarsRoutes;