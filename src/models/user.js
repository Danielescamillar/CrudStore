const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    role: {
        type: ["user", "admin"],
        default: "user"
    }
}, {
    versionKey: false
	}
);

module.exports = mongoose.model('User',userSchema)