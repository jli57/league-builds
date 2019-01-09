const { DDragonService } = require('../services/ddragon-service');
const HttpError = require('../../errors/HttpError');

const ResourceController = function () {
	let insertChampions = async (req, res) => {
		try {
			if (await DDragonService.insertChampions(req.params.version))
				return res.status(201).json({});
			else
				throw new HttpError(406, 'Error');
		} catch (ex) {
			res.status(ex.statusCode || 500, ex.msg);
		}
   };

   let insertItems = async (req, res) => {
		try {
			if (await DDragonService.insertItems(req.params.version))
				return res.status(201).json({});
			else
				throw new HttpError(406, 'Error');
		} catch (ex) {
			res.status(ex.statusCode || 500, ex.msg);
		}
	};

	return {
      insertChampions: insertChampions,
      insertItems: insertItems
	}
}();

module.exports = ResourceController;