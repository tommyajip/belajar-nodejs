const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

// import router MCR
const router = require('./router')
app.use(router)

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/webserver', (req, res) => res.send('Belajar express js'));

// call webserver
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
