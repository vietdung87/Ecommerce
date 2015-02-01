/**
* Categories.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	
  types: {
    isImage: function(file){
    var ext= file.split('.').slice(-1);
        if(ext=='jpg' || ext=='png'){
          return true;
        }
    }
  },
  validation_messages: {
     categoryName: {
        required: 'you have to specify a name for category ',
        type:"your type is not string"
      },
      categoryImage:{
          required:'you havent not chose any image to upload',

          isImage:'your file upload is not type of image'
      }

    }  ,
  attributes: {

  	categoryName:{
  		type: "string",
  		required:true
  	},
  	categoryDescription:{
  		type:"string"
  	},
  	categoryImage:{
  		type:"string",
      isImage:true
  	},
  	
    products:{
  		collection:"Products",
  		via:'productCategory'
  	}

  }
};

