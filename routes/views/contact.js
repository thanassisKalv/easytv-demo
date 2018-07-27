var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'mail.iti.gr',
	port: 465,
		auth: {
		user: 'tkalv@iti.gr',
		pass: 'okokok10'
	  }
});
	

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'contact';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	locals.data = {
		posts: [],
		categories: []
	};

	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function(next) 
	{	
		var newEnquiry = new Enquiry.model(),
			updater = newEnquiry.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, 
		function(err) 
		{
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}

			var mailOptions = {
				from: 'EasyTV@messages.com',
				to: 'thanassiskal@hotmail.com',
				subject: 'Testing Nodemailer...',
				text: 'That was easy!'
			  };
			  
			  transporter.sendMail(mailOptions, function(error, info)
			  {
				if (error) {
				  console.log(error);
				} else {
				  console.log('Email sent: ' + info.response);
				}
			  });

			next();
		});
		
	});

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
	
	view.render('contact', {layout: 'internal'});
	
};
