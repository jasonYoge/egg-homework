'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/user/:userId', 'user.index');
  app.get('/sheet/:sheetId', 'sheet.index');
  app.get('/register', 'register.index');
  app.get('/createSheet', 'createSheet.index');
  app.get('/createBook', 'createBook.index');
  // app.resources('/api/v1/login', 'login.index');
  app.post('/api/v1/login', 'login.index');
  app.post('/api/v1/register', 'register.submit');
  app.post('/api/v1/createBook', 'createBook.upload');
  app.post('/api/v1/createSheet', 'createSheet.upload');
};
