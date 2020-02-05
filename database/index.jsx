/* eslint-disable no-unused-vars */

const mysql = require('mysql');
const config = require('../config/config.js');

const db = mysql.createConnection(config);

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('==mySQL is connected==');
  }
});

const getPhotos = (expId, callback) => {
  const experienceId = expId;
  const grabAll = 'SELECT * FROM photos WHERE experienceId = ?';
  db.query(grabAll, expId, (error, response) => {
    if (error) {
      console.log('HERE IS THE ERROR: ', error);
      callback(error);
    } else {
      callback(null, response);
    }
  });
};


module.exports = {
  db, getPhotos,
};
