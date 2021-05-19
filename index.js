const express = require('express');
const fs = require('fs');
const path = require('path');

//initialised app as an instance of express.
const app = express();
const PORT = process.env.PORT || 3000;

//for data parsing
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public'));

//routes
require('./routes/apiRoutes')(app);  //ApiRoutes
require('./routes/htmlRoutes')(app); //HtmlRoutes


app.listen(PORT, ()=>{
    console.log(`server up and running on port: ${PORT}`);
});
