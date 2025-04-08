import dotenv from 'dotenv';
import express, { urlencoded } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello sweetie!' });
});

export default app;
