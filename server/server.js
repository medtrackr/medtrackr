const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

//convert json body
app.use(express.json());

//serve static routes
app.use(express.static(path.resolve(__dirname, '../')));

//serve index.html to /
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

//setup all routes *******************************



app.get('/db/scooby', (req, res) => {
  console.log('we here?')
  res.status(201).json({yes: 'we did it!'})
})





//setup all routes *******************************

//catch-all route error handler
app.use((req, res) => {
  res.status(404).send('Sorry, cannot find that specific route');
})

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught UNKNOWN middleware error',
    status: 402,
    message: { err: 'Express error handler caught UNKNOWN middleware error'}
  }
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message)
})

//have server listen on PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))