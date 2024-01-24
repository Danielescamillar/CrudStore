const { verifyToken } = require('../helpers/handleJwt');
const userSchema = require('../models/user');

const auth = async(req, res, next) => { 
	try {
		if (!req.headers.authorization) {
			res.status(401).send('Need a session token')
			return
		}
		const token = req.headers.authorization.split(' ').pop();
		const checkToken = await verifyToken(token);
		if (!checkToken._id) {
			res.status(403).send('Error id Token')
			return
		}
		const userById = await userSchema.findById(checkToken._id)
		if (!userById) {
			res.status(404).send('user _id not found')
			return
		}
		req.user = userById

		next();
	} catch (error) {
		if (error.message === 'JsonWebTokenError: invalid signature') {
			res.status(500).json({ error: 'invalid signature, please enter a valid token ' })
			return
		}
		res.status(500).send(error.message)
	}
}

module.exports = auth;