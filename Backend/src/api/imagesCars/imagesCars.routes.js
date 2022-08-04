const ImagesCarRoutes = require('express').Router();
const {getAllImagesCar, getImagesCarById, createImageCar } = require('./imagesCars.controller');

ImagesCarRoutes.get('/getAllImagesCar', getAllImagesCar );
ImagesCarRoutes.get('/getImagesCarById/:id', getImagesCarById);
ImagesCarRoutes.post('/createImageCar', createImageCar);

module.exports = ImagesCarRoutes;