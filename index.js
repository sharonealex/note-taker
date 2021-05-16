const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public'));

//Routes

require('./routes/apiRoutes')(app);  //ApiRoutes
require('./routes/htmlRoutes')(app); //HtmlRoutes


app.listen(PORT, ()=>{
    console.log(`server up and running on port: ${PORT}`);
});
