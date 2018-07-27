var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		posts: [],
	};

	locals.filters = {
		category: 'meeting'
	};

	// Load the current category filter
	view.on('init', function(next) 
	{
		if (true) 
		{
			keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function(err, result) {
				locals.data.category = result;
				next(err);
			});
		} else {
			next();
		}
	});

	// Load the posts
	view.on('init', function(next) 
	{
		var q = keystone.list('Post').paginate({
					page: 1,
					perPage: 3,
					maxPages: 1
				})
				.where('state', 'published')
				.sort('-publishedDate')
				.populate('author categories');
			
		//q.where('categories').in([locals.data.category]);
			
		q.exec(function(err, results) {
				//console.log(results);
				locals.data.posts = results;
				next(err);
			});
			
	});


	// Render the view
	view.render('index');
	
};
