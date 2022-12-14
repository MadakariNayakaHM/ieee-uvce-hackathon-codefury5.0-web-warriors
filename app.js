const express= require('express');
const app = express();
const cookie=require('cookie-parser');
const path=require('path');
const pug=require('pug');
app.use(cookie());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','pug');

app.set('views', path.join(__dirname,'views'));

const userRoutes=require('./routers/userRoute');
app.use('/ieee-uvce-user',userRoutes);

const startupRoutes=require('./routers/startupRoute');
app.use('/ieee-uvce-startup',startupRoutes);

const queryRoutes=require('./routers/queryRoute');
app.use('/ieee-uvce-query',queryRoutes);

 const viewsRoutes=require('./routers/viewsRoute');
 app.use('/',viewsRoutes);
const cookieParser = require('cookie-parser');
module.exports=app;