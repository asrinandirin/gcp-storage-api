const express = require('express');
const app = express();
const configRouter = require('./routes/configsRoute');
const mainPage = require('./routes/mainPage');
const config = require('/var/config/config.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/configs', configRouter);
app.use('/', mainPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on : ${PORT}`);
});
