const Hapi = require('@hapi/hapi'); // instal framework Hapi
const routes = require('./routes'); // export nilai routes.js

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`); // informasi pada console 
};

init();
