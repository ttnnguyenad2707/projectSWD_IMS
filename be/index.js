import * as dotenv from 'dotenv'

import express, { json } from 'express';
import cors from 'cors';
import sequelize from './src/database/mysql.js';
import router from './src/router/index.js'
import cookieParser from 'cookie-parser';
import Role from './src/models/Role.js';

dotenv.config();
const app = express()
const port = 5000
app.use(json());
app.use(cookieParser())
// app.use(cors({ origin: 'http://localhost:3000' }))
app.use(cors({ origin: true, credentials: true }));

app.use('/', router)


app.listen(port, async () => {
  sequelize.authenticate().then(() => {
    console.log('Connect database successfully.');
  }).catch((error) => {
    console.error('Error in connect database', error);
  });
  await sequelize.sync();
  const rolesToCreate = ['student', 'leader', 'teacher', 'manager', 'admin'];
  for (const roleName of rolesToCreate) {
    await Role.findOrCreate({
      where: { roleName },
    });
  }
  console.log(`Example app listening on port ${port}`)
})
