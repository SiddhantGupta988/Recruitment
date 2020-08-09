const mongoose=require('mongoose');
var ObjectId=require('mongodb').ObjectID;
const schemaForApplying = mongoose.Schema({
	  		  studentId:    {type:String},
              firstName: 	{type:String},
              emailId: 		{type:String},
              phoneNo: 		{type:String},
              collegeName:  {type:String},
              bTechCgpa :   {type:String},
              companyName:  {type:String},
              companyId:    {type:String},
});
module.exports = mongoose.model("jobSchema1",schemaForApplying);