import express from 'express';
import routes from './routes';

const server = express();

server.use(routes);

const PORT = process.env.PORT || 3007;
server.listen(+PORT, '0.0.0.0',
  () => console.log(`Listening on 0.0.0.0:${PORT}`));
