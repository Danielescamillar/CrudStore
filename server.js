require('dotenv').config();

const dbConect = require('./src/config/mongoDB')
const express = require('express')

const app = express()
app.use('/', require('./src/routes/item'));
app.use('/', require('./src/routes/auth'));

const port = process.env.PORT || 3001

app.listen(port, () => {
	console.log(`server listening on ${port}🚀`);
})
 
dbConect()