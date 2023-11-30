const express = require('express');
const router = express.Router();
const ReservationController = require('../controllers/reservationController');
const refresh = require('./refresh');

router.post('/', refresh, ReservationController.addReservation);
router.get('/', refresh, ReservationController.getReservationByUserId);
router.delete('/delete', refresh, ReservationController.reservationDelete);
// router.get('/mypage', authJWT, UserController.)

module.exports = router;