const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://blog:12345@blog-v3gjl.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }).then(() => console.log("DB CONNECTED"))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send("hello Harry")
});


app.listen(5000);

