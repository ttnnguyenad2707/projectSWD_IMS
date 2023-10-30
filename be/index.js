  require('dotenv').config()
  import express, { json } from 'express';
  import cors from 'cors';
  import { authenticate, sync } from './src/database/mysql';

  const app = express()
  const port = 5000
  app.use(json());
  app.use(cors({ origin: 'http://localhost:3000' }))
  app.use('/', require('./src/router'))


  app.listen(port, async () => {
    authenticate().then(() => {
      console.log('Connect database successfully.');
    }).catch((error) => {
      console.error('Error in connect database', error);
    });


    sync()
    
    console.log(`Example app listening on port ${port}`)
  })
