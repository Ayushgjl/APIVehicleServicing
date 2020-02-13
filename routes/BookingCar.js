const express = require('express');
const router = express.Router();
const CarBooking = require('../model/BookingCar');


router.route('/')
    .get((req, res, next) => {
        CarBooking.find({})
            .then((carbookings) => {
                res.json(carbookings);
            }).catch(next);
    })
    .post((req, res, next) => {
        CarBooking.create(req.body)
            .then((carbookings) => {
                res.json(carbookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        CarBooking.deleteMany({})
            .then((reply) => {
                res.json(reply);
            }).catch(next);
    });

router.route('/:id')
    .get((req, res, next) => {
        CarBooking.findOne({ _id: req.params.id })
            .then((carbookings) => {
                res.json(carbookings);
            }).catch(next);
    })
    .put((req, res, next) => {
        CarBooking.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then((carbookings) => {
                res.json(carbookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        CarBooking.findByIdAndDelete(req.params.id)
            .then((carbookings) => {
                res.json(carbookings);
            }).catch(next);
    });

module.exports = router;