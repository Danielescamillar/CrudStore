

const checkRol = (roles) => (req, res, next) => { 
	try {
		const rolUser = req.user.role
		const checkRoleValue = roles.some((roleSingle) => rolUser.includes(roleSingle))
		if (!checkRoleValue) {
			res.status(401).json({error:'Role not valid'})
			return
		}
		next();

	} catch (error) {
		throw new Error(error)
	}
}

module.exports = checkRol