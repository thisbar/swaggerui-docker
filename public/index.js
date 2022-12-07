const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require("path");
const swaggerDocument = YAML.load(path.resolve(__dirname, "yaml/openapi.yaml"))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3001;

app.listen(port, function () {
	console.log('SwaggerUI listening on port 3000!');
});

