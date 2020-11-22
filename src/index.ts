import express from 'express';
import { PORT } from './constants';
import { notes } from './notes';

const app = express();

app.get('/notes', (req, res) => {
  res.send(notes);
});

app.get('/note', (req, res) => {
  res.send(notes[1]);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
