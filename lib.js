const request = require('request')

exports.getUrlStatus = async function getUrlStatus(url) {
	return new Promise((resolve, reject) => request.get({
		url: url,
		timeout: 5000,
	}, (error, response) => {
		if (error) {
			resolve(0)
		} else {
			resolve(response.statusCode)
		}
	}))
}

exports.getAggregateStatus = function getAggregateStatus(statuses) {
	return statuses.every((status) => status === 200) ? 200 : 503
}
