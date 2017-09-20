'use strict';
const SERVER_USER = process.env.SERVER_USER || 'ywj';
const SERVER_PWD = process.env.SERVER_PWD || 'Ywj19921113';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_jasonyoung';

  // add your config here
  config.mysql = {
  	client: {
  		host: 'localhost',
  		port: '3306',
  		user: SERVER_USER,
  		password: SERVER_PWD,
  		database: 'homework_db'
  	}
  };

  return config;
};