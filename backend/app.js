const express=require('express');
const path = require('path');
const app=express(); 
const mongoose=require('mongoose');
const Post=require('./storing_in_database');
const jobSchema = require('./newJobsSchema');
const jobSchema1 = require('./applyJob');
const multer = require('multer');
const assert = require('assert');//here what does assert do is check if there is any error and if error present then it gives a assert error
var url = "mongodb://localhost:27017/test";
var MongoClient = require('mongodb').MongoClient;
var ObjectId=require('mongodb').ObjectID;
const nodemailer = require("nodemailer");


/* const option = {
     socketTimeoutMS: 30000,
     keepAlive: true,
     reconnectTries: 30000
 };
*/
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use("/imageOfStud",express.static());
//app.use(express.static)

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS");
    next();
});


const options = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };


const storage = multer.diskStorage({

    destination:(req,file,callBack) =>{
        callBack(null,'imageOfStud')
    },
    filename: (req,file,callBack) =>{
         const fileName = file.originalname;
         console.log(fileName);
        callBack(null,fileName)
    }
})
var upload = multer({ storage: storage });

const addingJobsToCompany = (req,res,next)=>
{
  const store= req.body;
  mongoose.connect(url,options
                    ,function(err,db)
                    {
                        assert.equal(null,err);
                        db.collection('companyJobs').insertOne(store,function(err,result)
                        {
                            assert.equal(null,err);
                            console.log('item inserted');
                         
                        })
    })
    console.log(store);
    res.status(201).json({message:'jobs added succesfully'});    
}

const v11= (req,res,next)=>
{
    const storeJobs =req.body;
    mongoose.connect(url,options
                    ,function(err,db)
                    {
                        assert.equal(null,err);
                        db.collection('studentJobsPortal').insertOne(storeJobs,function(err,result)
                        {
                            assert.equal(null,err);
                            console.log('job added into student portal');
                           
                        })
    })
    console.log(storeJobs);
    res.status(201).json({message:'jobs added succesfully'});    
}

const v3= (req,res,next)=>
{
    console.log(req.params.jobId);
    const storeJobs = req.body;
    mongoose.connect(url,options
                    ,function(err,db)
                    {
                        assert.equal(null,err);
                        db.collection('studentJobsPortal').updateOne({"_id" : ObjectId(req.params.jobId)},{"$set":{"status":"true"}},function(err,result)
                        {
                            assert.equal(null,err);
                            console.log('jmyyyyyyyyyyyyyyob updated into student portal');
                          
                        })
    })
   
    res.status(201).json({message:'jobs added succesfully'});    
}


const v12= (req,res,next)=>
{
    console.log(req.params.id);
    const storeJobs = req.body;
    mongoose.connect(url,options
                    ,function(err,db)
                    {
                        assert.equal(null,err);
                        db.collection('studentJobsPortal').updateOne({"_id" : ObjectId(req.params.id)},storeJobs,function(err,result)
                        {
                            assert.equal(null,err);
                            console.log('job updated into student portal');
                          
                        })
    })
   
    res.status(201).json({message:'jobs added succesfully'});    
}
const v4 = (req,res,next)=>
{
    const post=new Post
    ({
             _id:ObjectId(req.params.id),
            firstName1 : req.body.firstName1,
            lastName1 : req.body.lastName1,
            usn1 : req.body.usn1,
            age1 : req.body.age1,
            phoneNo1 : req.body.phoneNo1,
            dateOfBirth1:req.body.dateOfBirth1,
            address1:req.body.address1,
            highSchoolMarks1:req.body.highSchoolMarks1,
            seniorSchoolMarks1:req.body.seniorSchoolMarks1,
            bTechCgpa1:req.body.bTechCgpa1,
            noOfBacks1:req.body.noOfBacks1,
            branchList1:req.body.branchList1,
            semester1:req.body.semester1
    });
    console.log(post);
    mongoose.connect(url,option,function(err,db)
    {
        assert.equal(null,err);
        db.collection('user-data').updateOne({"_id" : ObjectId(req.params.id)},post,function(err,result)
        {
            assert.equal(null,err);
            console.log('item updated: '+post);
            
        })
    })

}


const v1 = (req,res,next)=>
{
    const storeJobs =req.body;
    mongoose.connect(url,options
                    ,function(err,db)
                    {
                        assert.equal(null,err);
                        db.collection('studentApplyJobs').insertOne(storeJobs,function(err,result)
                        {
                            assert.equal(null,err);
                            console.log('item inserted');
                           
                        })
                     })
                 console.log(storeJobs);
                 res.status(201).json({message:'jobs request sent succesfully'}
            );    
}

const v2 = (req,res,next)=>
{
    var file= req.body.f1;
    const post=new Post({
        firstName1 : req.body.firstName1,
        lastName1 : req.body.lastName1,
        emailId1:req.body.emailId1,
        collegeName1:req.body.collegeName1,
        usn1 : req.body.usn1,
        age1 : req.body.age1,
        phoneNo1 : req.body.phoneNo1,
        dateOfBirth1:req.body.dateOfBirth1,
        address1:req.body.address1,
        highSchoolMarks1:req.body.highSchoolMarks1,
        seniorSchoolMarks1:req.body.seniorSchoolMarks1,
        bTechCgpa1:req.body.bTechCgpa1,
        noOfBacks1:req.body.noOfBacks1,
        branchList1:req.body.branchList1,
        semester1:req.body.semester1,
        imagePath1:req.protocol+'://'+req.get("host")+'/imageOfStud/'+req.file.filename

       
    });
    mongoose.connect(url,options
                    ,function(err,db){
                        assert.equal(null,err);
                        db.collection('user-data').insertOne(post,function(err,result){
                            assert.equal(null,err);
                            console.log('item inserted');
                            
                        })
    })    
    console.log(post);
    res.status(201).json({message:'Post added succesfully'});
}


const v5= function(req,res,next)
{
    c = req.params.usn;
   var getback_user_details_from_database;

    mongoose.connect
    (url,function(err,db)
    {
        assert.equal(null,err);
        var cursor1 = db.collection('user-data').find({usn1: req.params.usn});
        
        cursor1.forEach
        (function(doc,err)
            {
               
                assert.equal(null,err);
                getback_user_details_from_database= doc;
            },
            function()
            {
               
                console.log(getback_user_details_from_database);
                res.json(getback_user_details_from_database);
            }
        );
       
    });
}


const v6 = (req,res,next)=>
{
    c = req.params.college;
    var getback_user_details_from_database=[];

    mongoose.connect
    (url,function(err,db)
    {
        assert.equal(null,err);
        var cursor1 = db.collection('studentJobsPortal').find({college: req.params.college});
        
        cursor1.forEach
        (function(doc,err)
            {
               
                assert.equal(null,err);
                getback_user_details_from_database.push(doc);
            },
            function()
            {
                console.log(getback_user_details_from_database);
                res.json(getback_user_details_from_database);
            }
        );
       
    });
}


const v8 =(req,res,next)=>
{
    console.log(req.params.id)
    mongoose.connect(url,option,function(err,db)
    {
        assert.equal(null,err);
        db.collection('user-data')
        .deleteOne( {"_id" : ObjectId(req.params.id)} ,function(err,result)
        {

            assert.equal(null,err);
            console.log('item deleted');
           
        })
    })
    res.status(200).json("details deleted");

}



const v7 = (req,res,next)=>
{
    
   var getback_user_details_from_database=[];

    mongoose.connect
    (url,function(err,db)
    {
        assert.equal(null,err);
        var cursor1 = db.collection('user-data').find();
        
        cursor1.forEach
        (function(doc,err)
            {
    
                assert.equal(null,err);
                getback_user_details_from_database.push(doc);
            },
            function()
            {
                
                console.log(getback_user_details_from_database);
                res.json(getback_user_details_from_database);
            }
        );
    });
}

const v9 =function(req,res,next)
{
    
   var getback_user_details_from_database=[];

    mongoose.connect
    (url,function(err,db)
    {
        assert.equal(null,err);
        var cursor1 = db.collection('companyJobs').find();
        
        cursor1.forEach
        (function(doc,err)
            {
    
                assert.equal(null,err);
                getback_user_details_from_database.push(doc);
            },
            function()
            {
                
                console.log(getback_user_details_from_database);
                res.json(getback_user_details_from_database);
            }
        );
    });
}


const v10 =function(req,res,next)
{
    
   var getback_user_details_from_database=[];

    mongoose.connect
    (url,function(err,db)
    {
        assert.equal(null,err);
        var cursor1 = db.collection('studentApplyJobs').find();
        
        cursor1.forEach
        (function(doc,err)
            {
    
                assert.equal(null,err);
                getback_user_details_from_database.push(doc);
            },
            function()
            {
                
                console.log(getback_user_details_from_database);
                res.json(getback_user_details_from_database);
            }
        );
    });
}

app.post("/api/posts1/",addingJobsToCompany);
app.post("/api/posts3/",v11);
//app.put("/api/posts3/:jobId",v3);
app.post("/api/posts/",upload.single('f1'),v2);
app.put("/api/posts3/:id",v12);

//app.put("/api/posts/:id",v4);
//app.delete("/api/posts/:id",v8);

app.get("/api/posts/:usn",v5);
app.get("/api/posts3/:college",v6);
app.get("/api/posts",v7);

app.get("/api/posts1",v9);

app.get("/api/posts2/",v10);
app.post("/api/posts2/",v1);

app
    .route("/api/posts/:id")
    .get(v4)
    .delete(v8);

app.post("/sendmail",(req,res)=>{
    console.log("request came");
    let user = req.body;
    console.log(user);
    sendMail(user,info=>{
        console.log('the mail has been sent and id is ${info.messageId}');
        res.send(info);
    });
});

async function sendMail(user,callBack){
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "wasseypurgangs69@gmail.com", // generated ethereal user
      pass: "9889446502ram", // generated ethereal password
    }
  });

  // send mail with defined transport object
  let mailOption = {
    from: '', // sender address
    to: user.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };
let info = await transporter.sendMail(mailOption);
    console.log(info, Promise.resolve(info));
//callback(info);


}



app.use((req,res,next)=>{
    res.end("hello from express");

});
module.exports=app;

// const MIME_TYPE_MAP ={
//     'image/jpeg': 'jpeg',
//     'image/png': 'png',
//     'image/jpg': 'jpg'
// }
// var storage = multer.diskStorage({
//    destination: function (req, file, cb) {
//     const isValid = MIME_TYPE_MAP(file.mimetype);
//      if(isValid){
//               error = null;
//   }
//      cb(null, 'backend/imagesOfStudent');
//    },
//    filename: function (req, file, cb) {
//     const name = file.originalname.toLowerCase().split().join('-');
//      const ext=MIME_TYPE_MAP[file.mimetype];
//      cb(null,name+'-'+Date.now()+'.'+ext);
//    }
//  });

