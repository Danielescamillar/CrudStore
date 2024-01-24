const jwt = require('jsonwebtoken');

const secret_key = process.env.SECRET_KEY

const tokenSing = (user) => { 
	
	try {
		const sign = jwt.sign({
			_id: user._id,
			role: user.role
		},
			secret_key ,
			{expiresIn: "8h"}
		)

		return sign
	} catch (error) {
		console.error(error);
	}
}

const verifyToken = (token) => { 

	try {
		return jwt.verify(token, secret_key)
	} catch (error) {
		throw new Error (error);
	}
}

module.exports = {tokenSing, verifyToken}