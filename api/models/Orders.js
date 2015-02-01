/**
* Order.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	
  
  	orderUserId:{
	model:'Users'
	},
	orderAmount:{
		type:"float",

	},
	orderShipName:{
		type:'string',
		required:true
	},
	orderShipAddress:{
		type:'string',
		required:true
	},
	orderShipCity:{
		type:'string',
		required:true
	},
	orderZip:{
		type:'string'

	},
	orderCountry:{
		type:'string',
		required:true
	},
	orderPhone:{
		type:'integer'
	},
	orderDate:{
		type:'datetime'
	},
	orderDetail:{
      collection:"OrderDetails",
      via:'detailOrderId'
    }


  }
};

