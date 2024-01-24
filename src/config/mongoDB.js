const mongoose = require('mongoose')

const dbConect = () => {

	const dbUri = process.env.DB_URI
	mongoose.set('strictQuery', true)
	mongoose.connect(dbUri, { useUnifiedTopology: true });
	
	const db = mongoose.connection

	db.on('error', err => console.error.bind(console, 'error connecting db🚫'));
	db.once('open', () => {
		console.log('MongoDb connection open 🚀')
	})

}

module.exports = dbConect
