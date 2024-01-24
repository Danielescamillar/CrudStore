const userSchema = require('../models/user')
const { encrypt, compare } = require('../helpers/handlePassword');
const { tokenSing, verifyToken } = require('../helpers/handleJwt');
const user = require('../models/user');

const register = async (req, res) => { 

	try {
		const password = await encrypt(req.body.password);
		req.body.password = password;
		const dataUser = await userSchema.create(req.body);
		const data = {
			token: await tokenSing(dataUser),
			user: dataUser
		}
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({ error:error.message });
	}
}

const login = async (req, res) => { 
	try {
		const user = await userSchema.findOne({ email: req.body.email }).select('password name role email');
		if (!user) {
			res.status(404).send({ error: 'User not found' });
			return;
		}
		const hashPassword = user.get('password')
		const checkPassword = await compare(req.body.password, hashPassword)
		if (!checkPassword) { 
			res.status(401).send({ error: 'Password incorrect' });
			return;
		}
		const data = {
			token: tokenSing(user),
			user
		}
		user.set('password', undefined, { strict: false });
		res.send({ data });
	} catch (error) {
		res.status(500).json({ error:error.message });
	}
}

module.exports = {register, login}