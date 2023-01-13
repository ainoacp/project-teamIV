const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const usersRouter = require('./src/api/routes/users.routes');
const roomsRouter = require('./src/api/routes/rooms.routes');
const subjectsRouter = require('./src/api/routes/subjects.routes');

const { connect } = require('./src/utils/database');
const PORT = process.env.PORT || 5000;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', usersRouter);
app.use('/rooms', roomsRouter);
app.use('/subjects', subjectsRouter);

app.listen(PORT, () => console.log('listening on port ', PORT));