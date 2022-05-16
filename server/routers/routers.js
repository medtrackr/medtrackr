const express = require('express');
const medController = require('../controllers/medController');
const router = express.Router();

//get request for getting user schedule
router.get('/login/:email/:password', 
   medController.getUserSchedule,
   medController.verifyPassword,
   medController.sortInfo,
   (req, res) => res.status(200).json(res.locals.userSchedule)
);

//post request for creating user
router.post('/create',
    medController.createUser,
    medController.getUserInfo,
    (req, res) => res.status(200).json(res.locals.user)
);

//post request for adding new medicine
router.post('/addMedicine',
   medController.checkMedicine,
   medController.getMedicineId,
   medController.getUserInfo,
   medController.addSchedule,
   medController.getUserSchedulePost,
   medController.sortInfo,
   (req, res) => res.status(200).json(res.locals.userSchedule)
);

module.exports = router;