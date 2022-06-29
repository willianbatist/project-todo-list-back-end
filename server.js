require('dotenv/config');
const app = require('./api/api.js');

const port = process.env.NODE_DOCKER_PORT;

app.get('/', (_request, response) => {
  response.json({ message: "Welcome to todo-list application." })
});

app.listen(port, () => console.log('ouvindo porta', port));