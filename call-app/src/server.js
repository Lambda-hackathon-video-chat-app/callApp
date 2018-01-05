const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

routes(server);

const port = 5000;

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
