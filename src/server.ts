import app from './app';

const PORT = process.env.APP_PORT || 3005;

const server = app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log(`Server Exit!`));
});
