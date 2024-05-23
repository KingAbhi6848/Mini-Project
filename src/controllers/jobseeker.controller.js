import Apply from "../models/applydata.model.js";
import RecuriterModel from "../models/recuriter.model.js";
import UserLogin from "../models/userlogin.model.js";
export default class JobSeekerController{

    homepage(req,res){
        res.render('index');
    }

    viewJobs(req,res){
      const jobs = RecuriterModel.getJobList();
    //   const recuriter = UserLogin.getJobSeeker();
    //   const jobseeker = UserLogin.
        res.render('viewjobs',{
            role:res.locals.role,
            jobs:jobs
        });
    }

    signup(req,res){
        res.render('jobseekerSignup');
    }

    login(req,res){
        res.render('jobseekerlogin');
    }

    applyjob(req,res){
        res.render('jobseekerapplyform');
    }

    postsignup(req,res){
           const result = UserLogin.addJobSeeker(req.body);
           const {success , newJobSeeker} = result;
        if(success){
            console.log('newJobseeker:-', newJobSeeker);
            res.redirect('/joblogin');
        }
       else{
        res.send('Something went Wrong');


       }
    }

    postlogin(req,res){
        const result = UserLogin.jobLoginAuth(req.body);
        const {success,message} = result;
req.session.isUser = success;


     console.log(message);
     res.redirect('/viewjobs');
        
    }

    postApply(req,res){
        console.log(req.file)
        const success = Apply.data(req.body,req.file.filename);
        console.log('Form Submitted Sucessfully');
        console.log(success);
        res.redirect('/viewjobs');
    }

    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }
           res.redirect('/');
        })
    }
}