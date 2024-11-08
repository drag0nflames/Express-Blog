require('dotenv').config();
const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');


//port number will be 3000 or  any other port number you want
const port = 3000 || process.env.port;

//Templating engine ;  ejs layouts are automatically rendered from views folder
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');


//public folder will be holding stuffs like JS, CSS and images
app.use(express.static('public'))

//splitting the  routes into different files which will be stored in server->routes folder. This is good practice for large applications
app.use('/', require('./server/routes/main'));


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

