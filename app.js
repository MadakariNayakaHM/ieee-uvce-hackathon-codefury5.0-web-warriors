const express= require('express');
const app = express();
const cookie=require('cookie-parser');
const path=require('path');
app.use(cookie());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','pug');

app.set('views', path.join(__dirname,'views'));

const userRoutes=require('./routers/userRoute');
app.use('/ieee-uvce-user',userRoutes);

const startupRoutes=require('./routers/startupRoute');
app.use('/ieee-uvce-startup',startupRoutes);


// const viewsRoutes=require('./routers/viewsRoute');
const cookieParser = require('cookie-parser');
module.exports=app;