const express = require('express');
const model = require('../models/models');

const medController = {};

medController.getUserSchedule =  (req, res, next) => {
    const queryText = `SELECT users.*, medicine.*, users_medicine.*
    FROM users
    LEFT OUTER JOIN users_medicine ON users_medicine.user_id = users._id
    LEFT OUTER JOIN medicine ON users_medicine.medicine_id = medicine._id
    WHERE users.email = $1;`

    const params = [req.params.email]
    
    model.query(queryText, params)
    .then(data => {
        if (data.rows.length === 0) {
          res.locals.userInfo = 'Invalid email';
          next();
        } else {
        res.locals.userInfo = data.rows;
        next();
      }
    })
    .catch(err => {
        return next({
          log: `An error occured in medController.getUserSchedule`,
          message: {err: `An error occured in medController.getUserSchedule`}
        })
    })
}

medController.verifyPassword = (req, res, next) => {
  if (typeof res.locals.userInfo === 'string') {
    next();
  }
  const dbPassword = res.locals.userInfo[0].password;

  if(req.params.password === dbPassword) {
    next();
  }else {
    res.locals.userInfo = 'Invalid Password'
    next()
  }

}

medController.sortInfo = (req, res, next) => {
  if (typeof res.locals.userInfo === 'string') {
    next();
  }

  const userInfo = res.locals.userInfo;

  const userSchedule = {
    userId: userInfo[0]._id,
    firstName: userInfo[0].first_name,
    lastName: userInfo[0].last_name,
    email: userInfo[0].email,
  }

  const userMedicines = []

  for (let i = 0; i < userInfo.length; i++) {
    const obj = {
      breakfast: false,
      lunch: false,
      dinner: false,
      beforeBed: false
    };

    const medSchedule = {
      medicineId: userInfo[i].medicine_id,
      medicineName: userInfo[i].medicine_id,
    }

    const key = {
      breakfast: 2,
      lunch: 3,
      dinner: 5, 
      beforebed: 7
    }

    const schedule = userInfo[i].schedule

    for (let el in key) {
      if (schedule % key[el] === 0) {
        obj[el] = true;
      }
    }

    medSchedule.medicineSchedule = obj

    userMedicines.push(medSchedule)

  }

  userSchedule.userMedicines = userMedicines

  res.locals.userSchedule = userSchedule;
  next();

}

module.exports = medController


