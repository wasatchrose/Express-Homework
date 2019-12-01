const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('Created with Express Generator by Marilynn'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));