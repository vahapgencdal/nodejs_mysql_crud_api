import mysql from 'mysql';
import dbConfig from '../config/db.config';

var connection = mysql.createPool({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB,
    port:dbConfig.PORT
});

export default connection;