const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ni: 'hao'});
});

console.log('process.env.PORT', process.env.PORT);
app.listen(3000);