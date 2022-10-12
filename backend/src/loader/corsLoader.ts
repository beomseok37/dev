import express from 'express';
import cors from 'cors';

export default function corsLoader(app: express.Application) {
  const whiteList = ['localhost:3000'];
  const corsOptions = {
    origin: whiteList,
  };
  app.use(cors(corsOptions));
}
