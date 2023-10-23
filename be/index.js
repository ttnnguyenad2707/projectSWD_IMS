  require('dotenv').config()
  const express = require('express');
  const cors = require('cors');
  const sequelize = require('./src/database/mysql');

  const app = express()
  const port = 5000
  app.use(express.json());
  app.use(cors({ origin: 'http://localhost:3000' }))
  app.use('/', require('./src/router'))


  app.listen(port, async () => {
    sequelize.authenticate().then(() => {
      console.log('Connect database successfully.');
    }).catch((error) => {
      console.error('Error in connect database', error);
    });


    sequelize.sync()
    
    console.log(`Example app listening on port ${port}`)
  })
