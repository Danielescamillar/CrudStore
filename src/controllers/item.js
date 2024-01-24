const itemSchema = require('../models/item')

const getItems = async (req, res) => { 

	try {
		const data = await itemSchema.find()
		setTimeout(() => {
			res.status(200).json(data);
		},2000);
	} catch (error) {
		res.status(500).json({error: error.message});
	}
}

const getItem = async (req, res) => { 
	try {
		const data = await itemSchema.findById(req.params.id)
		if (!data) {
			res.status(404).json({ error: "User not found🚫" });
			return
		}
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({error: error.message});
	}
}

const createItem = async (req, res) => { 
	try {
		const data = await itemSchema.create(req.body);
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({error: error.message});
	}
}

const updateItem = async (req, res) => { 

	try {
		const data = await itemSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!data) {
			res.status(404).json({ error: "User not found🚫" });
			return
		}
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({error: error.message});
	}
}

const deleteItem = async (req, res) => { 

	try {
		const data = await itemSchema.findByIdAndRemove(req.params.id);
		if (!data) {
			res.status(404).json({ error: "User not found🚫" });
			return
		}
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({error: error.message});
	}
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem }