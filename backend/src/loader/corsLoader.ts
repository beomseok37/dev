import express from 'express';
import cors from 'cors';

export default function corsLoader(app: express.Application) {
  const whiteList = [`${process.env.CLIENT_URL}`];
  const corsOptions = {
    origin: whiteList,
  };
  app.use(cors(corsOptions));
}
