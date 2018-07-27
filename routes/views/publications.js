var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'publications';
	
	locals.data = {
		posts: [],
		categories: []
	};

	view.on('init', function(next) 
	{
		var q = keystone.list('Post').paginate({
				page: req.query.page || 1,
				perPage: 5,
				maxPages: 1
			})
			.where('state', 'published')
			.sort('-publishedDate')
			.populate('author categories');
		
		
		q.exec(function(err, results) {
			locals.data.posts = results;
			next(err);
		});
		
	});
	// Render the view
	view.render('publications', {layout: 'internal'});
	
};