const express = require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

//set up static route and use express.static method to sever the static files located in the public folder
app.use('/static', express.static('public'));
// view engine setup
app.set('view engine','pug');

//set up routers
const mainRoutes = require('./routes');
const projectRoutes=require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectRoutes);

/* Catch 404 Not Found error */
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status=404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error',{error:err});
    next(err);
});

app.listen(3000, ()=>{
    console.log("The application is running on localhost:3000");
});