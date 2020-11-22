import express from 'express';
import { PORT } from './constants';

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Howdy', message: 'This is only a test.' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
