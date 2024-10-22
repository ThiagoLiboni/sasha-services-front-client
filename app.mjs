import express from 'express'
import server from './src/server/config.js'
import logger from './src/middlewares/logger.js'
import errorHandler from './src/middlewares/errorHandler.js'

import {router as routerLocation} from './src/components/geolocation/router.js'
import {router as routerView} from './src/public/router.js'
import path from 'path';
import { fileURLToPath } from 'url';

const {app, startServer} = server;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(logger);
app.use(express.json());

app.use(express.static(path.join(__dirname, './src/public')));
app.use(express.static(path.join(__dirname, './src')));

app.use(routerLocation);
app.use(routerView);

app.use(errorHandler);

startServer()