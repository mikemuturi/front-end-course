const express = require('express');
const morgan = require('morgan');

//express app
const app = express();


// register view engine
app.set('view engine', 'ejs');



// listen for requests

app.listen(3000);

// midlle ware and static files
app.use(express.static('public'));


//  app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host:, req.hostname');
//     console.log('path:', req.path);
//     console.log('method', req.method);
//     next();
//  });

 app.use(morgan('dev'));

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html', {root:__dirname});
    const blogs = [
        {title: 'Mike finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Muturi finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'Home',  blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    // res.sendFile('./views/about.html', {root:__dirname});
    res.render('about', {title: 'About'})
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

// redirects

app.get('/about-us', (req, res) =>{
    res.redirect('/about',  {title: 'About'});
})

//404 Page
app.use((req, res) =>{
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: '404'});
});