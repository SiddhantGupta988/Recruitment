const mongoose=require('mongoose');
var ObjectId=require('mongodb').ObjectID;

const postschema=mongoose.Schema({
    _id:{type:ObjectId},
    firstName1:{type:String,required:true},
    lastName1:{type:String,required:true},
    usn1:{type:String,required:true},
    phoneNo1:{type:String,required:true},
    collegeName1:{type:String,required:true},
    age1:{type:String,required:true},
    emailId1:{type:String,required:true},
    dateOfBirth1:{type:String,required:true},
    address1:{type:String,required:true},
    semester1:{type:String,required:true},
    branchList1:{type:String,required:true},
    highSchoolMarks1:{type:String,required:true},
    seniorSchoolMarks1:{type:String,required:true},
    bTechCgpa1:{type:String,required:true},
    noOfBacks1:{type:String,required:true},
    imagePath1:{type:String,required:true}
   
});
module.exports=mongoose.model('Post',postschema);
