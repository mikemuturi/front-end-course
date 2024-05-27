const http = require('http');
const fs = require('fs');
const _ = require('lodash');

let PORT = 3000;

const server = http.createServer((req, res) => {
    // Log request URL and method (optional for debugging)
    // console.log(req.url, req.method);

    // Generate a random number using lodash (for demonstration purposes)
    const num = _.random(0, 20);
    console.log(num);

    // Use lodash's once method to ensure the function only runs once
    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    // Determine the file path based on the request URL
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            return; // Ensure no further processing is done for this case
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Send the HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

// Handle the error event to catch EADDRINUSE
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Trying another port...`);
        PORT += 1;
        server.listen(PORT, 'localhost', () => {
            console.log(`Listening for requests on port ${PORT}`);
        });
    } else {
        console.error(`Server error: ${err}`);
    }
});

// Start the server on the initial port
server.listen(PORT, 'localhost', () => {
    console.log(`Listening for requests on port ${PORT}`);
});
