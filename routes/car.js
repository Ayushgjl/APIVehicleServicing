const express = require('express');
const router = express.Router();
const Carbooking = require('../model/BookingCar');


router.route('/')
    .get((req, res, next) => {
        Carbooking.find({})
            .then((Carbookings) => {
                res.json(Carbookings);
            }).catch(next);
    })
    .post((req, res, next) => {
        Carbooking.create(req.body)
            .then((Carbookings) => {
                res.json(Carbookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        Carbooking.deleteMany({})
            .then((reply) => {
                res.json(reply);
            }).catch(next);
    });

router.route('/:id')
    .get((req, res, next) => {
        Carbooking.findOne({ _id: req.params.id })
            .then((Carbookings) => {
                res.json(Carbookings);
            }).catch(next);
    })
    .put((req, res, next) => {
        Carbooking.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then((Carbookings) => {
                res.json(Carbookings);
            }).catch(next);
    })
    .delete((req, res, next) => {
        Carbooking.findByIdAndDelete(req.params.id)
            .then((Carbookings) => {
                res.json(Carbookings);
            }).catch(next);
    });

module.exports = router;