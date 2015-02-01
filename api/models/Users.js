/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	
  	firstName:{
  		type:'string',
  		required:true
  	},
  	lastName:{

  		type:'string',
  		required:true
  	},
  	userEmail:{
  		type: 'email',
      	unique: true
  	},
  	password:{
  		type:'string',
  		required:true
  	},

  	gender:{
  		type:'boolean',
  		required:true
  	},
  	dateOfBirth:{
  		type:'date',
  		required:true

  	},
  	orders:{

  		collection:"Orders",
  		via:'orderUserId'
  	}


  }
};

