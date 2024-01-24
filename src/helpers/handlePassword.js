const bcryptjs = require('bcryptjs');

const encrypt = (passwordPlain) => { 

	try {
		const hash = bcryptjs.hash(passwordPlain, 10);
		return hash;
	} catch (error) {
		console.error(error);
	}
}

const compare = (passwordPlain, passwordHash) => { 
	try {
		return bcryptjs.compare(passwordPlain, passwordHash);
	} catch (error) {
		console.error(error);
	}
}

module.exports = {encrypt, compare}