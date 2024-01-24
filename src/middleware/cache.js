const getExpeditiousCache = require('express-expeditious');

const defaultOptions = {
	namespace: 'redisCache',
	defaultTtl: '1 minute', //TODO: 60 * 1000
	engine: require('expeditious-engine-redis')({
		host: '127.0.0.1',
		port: 6379
	  }),
	statusCodeExpires: {
		404: '5 minutes',
		500: 0
	}
};

const checkInit = getExpeditiousCache(defaultOptions)

module.exports = checkInit