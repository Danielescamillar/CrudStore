const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({

	title: {
		type: String,
		required: true,
	  },
	  category: {
		type: String,
		required: true,
		},
		stock: {
			type: Number,
		  },
}, {versionKey: false}
)

module.exports = mongoose.model('Item', itemSchema)