import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('This is only a test.');
});

app.listen(process.env.PORT ?? 8080);
