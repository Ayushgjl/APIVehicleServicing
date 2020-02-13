const express = require('express');
const router = express.Router();
const BikeBooking = require('../model/BookingBike');


router.route('/')
    .get((req, res, next) => {
        BikeBooking.find({})
            .then((bikebookings) => {
                res.json(bikebookings);
            }).catch(next);
    })
    .post((req, res, next) => {
        BikeBooking.create(req.body)
            .then((bikebookings) => {
                res.json(bikebookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        BikeBooking.deleteMany({})
            .then((reply) => {
                res.json(reply);
            }).catch(next);
    });

router.route('/:id')
    .get((req, res, next) => {
        BikeBooking.findOne({ _id: req.params.id })
            .then((bikebookings) => {
                res.json(bikebookings);
            }).catch(next);
    })
    .put((req, res, next) => {
        BikeBooking.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then((bikebookings) => {
                res.json(bikebookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        BikeBooking.findByIdAndDelete(req.params.id)
            .then((bikebookings) => {
                res.json(bikebookings);
            }).catch(next);
    });

module.exports = router;