import Server from './server';
import database from './database';
database();
const server=new Server();
server.start();
