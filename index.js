const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public'));

//routes

//apiRoutes
require('./routes/apiRoutes')(app);

//htmlRoutes
require('./routes/htmlRoutes')(app);

app.listen(PORT, ()=>{
    console.log(`server up and running on port ${PORT}`);
});
