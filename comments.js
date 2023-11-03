// Create web server
// 1. npm init
// 2. npm install express --save
// 3. npm install body-parser --save
// 4. npm install cors --save
// 5. npm install morgan --save
// 6. npm install mysql --save
// 7. npm install nodemon --save-dev
// 8. npm install dotenv --save
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// 7. npm install nodemon --save-dev
// nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use nodemon replace the word node on the command line when executing your script.
// https://www.npmjs.com/package/nodemon
const app = express();
const port = 3000;

// 6. npm install dotenv --save
// Load environment variables from .env file into process.env
require('dotenv').config();

// 4. npm install morgan --save
// HTTP request logger middleware for node.js
//