const http = require('http');
const express = require('express');

const HOST = 'localhost';
const PORT = 9999;
const app = express();
const server = http.createServer(app);


const list = `
    <h1>Hello Page</h1>
    <ul>
        <li><a href="/hello/name/bro">HelloBro</a></li>
        <li><a href="/hello/name/sis">HelloSis</a></li>
        <li><a href="/hello/name/mom">HelloMom</a></li>
    </ul>
    <a href="/">Home Page</a>

`

// home page
app.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to the Employee API!</h1>
<iframe src="https://giphy.com/embed/3owyoUHuSSqDMEzVRu" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/foxhomeent-3owyoUHuSSqDMEzVRu">via GIPHY</a></p>
<a href="/hello">Hello Page</a>
    `);
});

app.get('/hello', (req, res) => {
    res.send(list);
});

app.get('/hello/name/bro', (req, res) => {
    res.send(`<h2>Hello Bro!</h2>
    <a href="/hello">Back</a>  
    `)
})
app.get('/hello/name/sis', (req, res) => {
    res.send(`<h2>Hello Sis!</h2>
    <a href="/hello">Back</a>
    `)
})

app.get('/hello/name/mom', (req, res) => {
    res.send(`<h1>Hello Momma!</h1>
        <a href="/hello">Back</a>
    `)
})

app.get('/hello/:whom', (req, res) => {
    const whom = req.params.whom;
    res.send(`Hello, ${whom}!`);
});


// catch all
app.get('*', (req, res) => {
    res.status(404).send(`
      <h1>Page not found</h1>
    `);
});

server.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}/`);
});
