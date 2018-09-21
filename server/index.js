require('dotenv').config();

const express = require('express'),
  app = express(),
  {json} = require('body-parser'),
  port = process.env.PORT || 3001,
  massive = require('massive'),
  ctrl = require('./controller');

app.use(json());


massive(process.env.CONNECTION_STRING).then(db => {
  // console.log("db,", db)
  app.set('db', db);
}).catch(err => console.log(err));

app.get('/api/items', ctrl.get);
app.post('/api/item', ctrl.create);
app.delete('/api/item/:id', ctrl.remove);
app.put('/api/item/:id', ctrl.update);

app.listen(port, () => console.log(`Server is listening on port ${port}`))
