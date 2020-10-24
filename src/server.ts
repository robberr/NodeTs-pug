import express = require('express');
import morgan = require('morgan');
import path = require('path');

import indexRoutes from './routes';
class Server {
    app: express.Application;
    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', 4000);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'pug');
    }
    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }
    routes() { 
        this.app.use('/', indexRoutes);
        this.app.use(express.static(path.join(__dirname, 'public')));    
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Server is running at', this.app.get('port'));
        });
    }
}
export default Server;