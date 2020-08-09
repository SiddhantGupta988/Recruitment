const mongoose=require('mongoose');
var ObjectId=require('mongodb').ObjectID;
const newData = mongoose.Schema({
	_id:         {type:ObjectId},
	job:         {type:String},
	companyName: {type:String},
	companyId:   {type:String},
	college:     {type:String},
	skills:      {type:String},
	salary:      {type:String},
	status:      {type:String}, 
});
module.exports = mongoose.model("jobSchema",newData);