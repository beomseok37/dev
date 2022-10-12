import express from 'express';
import dotenv from 'dotenv';
import http from 'http';

import init from 'src/loader';

dotenv.config();

const app = express();

init(app);

const server = http.createServer(app);
server.listen(6000);
