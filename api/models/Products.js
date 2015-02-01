/**
* Products.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	
  	prodcuctName:{
  		type:"string",
  		required:true
  	},
  	productDescription:{
  		type:"string"
  	},
  	productPrice:{
  		type:"float",
  		required:true
  	},
  	productStock:{
  		type:"integer",
  		required:true
  	},
  	productImage:{
  		type:"string",

  	},
  	// Relationship with Productcategories Model 
  	productCategory:{
  		model:'Categories'
  	},
    orderDetail:{
      collection:"OrderDetails",
      via:'detailProductId'
    }

  }
};

