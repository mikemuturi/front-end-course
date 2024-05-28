const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

// connect to db
// const dbURI = 'mongodb+srv://Mike_1234:Mike_1234@test-123.0pj0urc.mongodb.net/Test-123';
// mongoose.connect(dbURI)
//   .then((result) => {
//     console.log('Connected to DB');
//     // listen for requests only after DB connection is established
//     const port = process.env.PORT || 3000; // Use the environment variable PORT or default to 3000
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// app.get('/add-blog', (req, res) => {
// const blog = new Blog(
//     {
//         title: 'New blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     }
// );

// blog.save()
// .then( (result) => {
//     res.send(result)
// })
// .catch((err) => {
//     console.log(err);
// });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });
// app.get('/single-blog', (req, res) =>{
//     Blog.findById()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })

// routes
// app.get('/', (req, res) => {
//   const blogs = [
//     { title: 'Mike finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
//     { title: 'Muturi finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
//     { title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
//   ];
//   res.render('index', { title: 'Home', blogs });
// });

app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
//blog routes

app.use('/blogs',blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
