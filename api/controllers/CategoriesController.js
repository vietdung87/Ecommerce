/**
 * CategoriesController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var path=require('path');
var uuid = require('uuid-v4');
module.exports = {
		// this action go to form to create new category 
	new: function(req,res){
		
		res.view("admin/category/new.ejs");
		
	
	},
	
	
	// this action to create new category to database 
	//and upload inmage to image foder
	create: function(req,res){
		// if Get  method request go to erro 
		if(req.method === 'GET')  return res.badRequest('get is not allow ');;	

				// upload file 
			req.file('categoryImage').upload({ dirname: '../../assets/images', 


				saveAs:uuid()+"category.jpg"} //  Generate a unique name for image upload 
					,function onUploadComplete (err, files) {	
							
							if (err) return res.negotiate(err);
								var Category={};
							//  If no files were uploaded, categoryImaage property is null
							if (files.length === 0){
								
     							 Category={
								categoryName:req.param('categoryName'),
								categoryDescription:req.param('categoryDescription'),
								categoryImage:''
								}


    						}else{
    							//var imageName=files[0].stream.fd.slice(52);
    							// Get name image in destination 
    							var imageName= path.basename(files[0].stream.fd);
    							
    							
     							 Category={
								categoryName:req.param('categoryName'),
								categoryDescription:req.param('categoryDescription'),
								categoryImage:imageName
								}

    						}

					Categories.create(
								Category,
								function categoryCreat (err,category){
									if(err){
										if (err.ValidationError) {
       							 			errors = HandleValidation.transformValidation(Categories, err.ValidationError);
        							
        									req.session.flash = {
											err: errors
 										};
 										return res.redirect('/admin/category/new');	
    								};

								}
				    			
    							return res.redirect('/admin/category/');

					});							
			});
	},


	index :function(req,res,next){

		Categories.find(function foundCategories(err, categories) {
      		if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      		res.view("admin/category/index.ejs",{
        			categories: categories
      		});
    	});

	},// End index action
	show :function(req,res,next){
		
		 Categories.findOne(req.param('id'), function foundUser(err, category) {
      			if (err) return next(err);
      			if (!category) return next('category doesn\'t exist.');
      			res.view("admin/category/show.ejs",{category:category});
      			
    	})

			
	}, // End show 

	edit: function (req,res,next){

		Categories.findOne(req.param('id'), function foundUser(err, category) {
      			if (err) return next(err);
      			if (!category)  return next('category doesn\'t exist.');
      			res.view("admin/category/edit.ejs",{category:category});
      			
    	})



	}, // End Edit

	update:function(req,res,next){
		req.file('categoryImage').upload({ dirname: '../../assets/images', saveAs:uuid()+"category.jpg"}
					,function onUploadComplete (err, files) {	
							
						if (err) return res.json({'err':err});
							var Category={};
							//  If no files were uploaded, categoryImaage property is null
							if (files.length === 0){
								Categories.findOne(req.param('id'), function foundUser(err, category) {
      								if (err) return next(err);
      								if (!category)  return next('category doesn\'t exist.');
      							Category={
								categoryName:req.param('categoryName'),
								categoryDescription:req.param('categoryDescription'),
								categoryImage: category.categoryImaage
								}
      			
    						})
								
    					}else{
    							//var imageName=files[0].stream.fd.slice(52);
    							var imageName= path.basename(files[0].stream.fd);
    							
    							
     							 Category={
								categoryName:req.param('categoryName'),
								categoryDescription:req.param('categoryDescription'),
								categoryImage:imageName
								}

    						}
 
					Categories.update(req.param('id'),Category,
								function categoryUpdate (err,category){
									if(err){
										if (err.ValidationError) {
       							 			errors = HandleValidation.transformValidation(Categories, err.ValidationError);
        							
        									req.session.flash = {
											err: errors
 										};
 										return res.redirect('/admin/category/edit/'+ req.param('id'));	
    								};

								}
				    			
    							return res.redirect('/admin/category/');

					});							
			});


			




	} ,// End update function 

	destroy : function(req,res,next){

			Categories.findOne(req.param('id'), function foundCategory(err, category) {
	      			
	      			if (err) return next(err);

	     			if (!category) return next('Category doesn\'t exist.');

	      		Categories.destroy(req.param('id'), function categoryDestroyed(err) {
	        			if (err) return next(err);

	      		});        

	    	 return res.redirect('/admin/category/');

	    	});
	}


		
};

