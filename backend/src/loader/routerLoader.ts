import express from 'express';
import { useExpressServer } from 'routing-controllers';

export default function routerLoader(app: express.Application) {
  useExpressServer(app, {
    routePrefix: '/api/v1',
    controllers: ['src/routers/v1/**/*.ts'],
  });
}
