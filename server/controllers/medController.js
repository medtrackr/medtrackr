const express = require('express');
const models = require('../models/models');
const model = require('../models/models');

const medController = {};

medController.getUserSchedule =  (req, res, next) => {
    const queryText = `SELECT users.*, medicine.*, users_medicine.*, users._id AS users_id
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
    userId: userInfo[0].users_id,
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
      medicineName: userInfo[i].name,
    }

    const key = {
      breakfast: 2,
      lunch: 3,
      dinner: 5, 
      beforeBed: 7
    }

    const schedule = userInfo[i].schedule

    for (let el in key) {
      if (schedule % key[el] === 0) {
        obj[el] = true;
      }
    }

    if (userInfo[i].schedule !== null) {
      medSchedule.medicineSchedule = obj

      userMedicines.push(medSchedule)
  }

  }

  userSchedule.userMedicines = userMedicines

  res.locals.userSchedule = userSchedule;
  next();

}

medController.createUser = (req, res, next) => {
  const valuesObj = {
    url: `INSERT INTO users (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)`,
    params: [req.body.firstName, req.body.lastName, req.body.email, req.body.password]
  }
  model.query(valuesObj.url, valuesObj.params)
  .then(data => {
    res.locals.user = data.rows
    next()
  })
  .catch(err => {
    res.locals.user = 'Email already exists or missing information, try again'
    next()
  })
}

medController.getUserInfo = (req, res, next) => {
  if (typeof res.locals.user === 'string'){
    next()
  }

  const valuesObj = {
    url: `SELECT users.first_name, users.last_name, users.email, users._id FROM users
    WHERE users.email = $1`,
    params: [req.body.email]
  }
  model.query(valuesObj.url, valuesObj.params)
  .then(data => {
    res.locals.user = data.rows[0]
    next()
  })
  .catch(err => {
    next({
      log: `Error occured in medController.getUserInfo`,
      message: {err: err}
    })
  })
}

medController.checkMedicine = (req, res, next) => {
  console.log('inside check medicine')
  const queryText = `INSERT INTO medicine (name) VALUES ($1)
  ON CONFLICT DO NOTHING`
  const queryParams = [req.body.name]

  models.query(queryText, queryParams)
  .then(data => {
    res.locals.medicineId = data.rows
    next()
  })
  .catch(err => {
    res.locals.medicineId = 'Request body medicine name error'
    next()
  })
}

medController.getMedicineId = (req, res, next) => {
  console.log('inside get medicineID')
  if (typeof res.locals.medicineId === 'string') next()
  const queryText = `SELECT * FROM medicine
  WHERE medicine.name = $1`
  const queryParams = [req.body.name]
  
  models.query(queryText, queryParams)
  .then(data => {
    res.locals.medicineId = data.rows[0]
    next()
  })
  .catch(err => {
    res.locals.medicineId = 'Request body medicine name error'
    next()
  })
}

medController.addSchedule = (req, res, next) => {
  console.log('inside addschedule', req.body)
  if (typeof res.locals.medicineId === 'string') {
    res.locals.schedule = res.locals.medicineId
    next()
  }
  
  //convert true / false values in medicineSchedule to a unique number to store in database
  const medSch = req.body.userMedicines.medicineSchedule;
  console.log(res.locals.user)
  console.log(res.locals.medicineId)

  const key = {
    breakfast: 2,
    lunch: 3,
    dinner: 5, 
    beforeBed: 7
  }
  let schedule = 1;

  for(let el in medSch){
    if (medSch[el]) schedule *= key[el]
  }

  const queryText = `INSERT INTO users_medicine (user_id, medicine_id, schedule)
  VALUES ($1, $2, $3)`

  const queryParams = [res.locals.user._id, res.locals.medicineId._id, schedule]

  console.log(queryParams)

  models.query(queryText, queryParams)
  .then(data => {
    res.locals.schedule = data
    next()
  })
  .catch(err => {
    next({
      log: `Error occured in medController.addSchedule`,
      message: {err: err}
    })
  })
  .catch(err => {
    res.locals.schedule = 'Request body medicine name error'
    next()
  })
}

medController.getUserSchedulePost =  (req, res, next) => {
  console.log('inside getuserschedulepost')
  if (typeof res.locals.schedule === 'string') {
    res.locals.userInfo = res.locals.schedule
    next()
  }

  const queryText = `SELECT users.*, medicine.*, users_medicine.*, users._id AS users_id
  FROM users
  LEFT OUTER JOIN users_medicine ON users_medicine.user_id = users._id
  LEFT OUTER JOIN medicine ON users_medicine.medicine_id = medicine._id
  WHERE users.email = $1;`

  const params = [req.body.email]
  
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

module.exports = medController


