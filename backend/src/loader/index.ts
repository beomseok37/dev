import express from 'express';
import expressLoader from './expressLoader';
import routerLoader from './routerLoader';
import socketLoader from './socketLoader';
import corsLoader from './corsLoader';

export default function init(app: express.Application) {
  expressLoader(app);
  socketLoader(app);
  corsLoader(app);
  routerLoader(app);
}
