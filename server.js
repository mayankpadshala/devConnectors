const express = require('express');

const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo Db
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo Db Connected'))
    .catch((err) => console.log(err))

//Use Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);


app.get('/', (req, res) => {res.send('Hello')})

const port = process.env.PORT || 5000;

app.listen(port, ()=> {console.log(`Server running on port ${port}`)})