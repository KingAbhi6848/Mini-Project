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

    const recuriterId = req.session.recuriterId;
        res.render('viewjobs',{
            role:res.locals.role,
            jobs:jobs,
            recuriter:recuriterId
        });
    }

    signup(req,res){
        res.render('jobseekerSignup');
    }

    login(req,res){
        res.render('jobseekerlogin');
    }

    applyjob(req,res){
      const id =  req.params.id;
        res.render('jobseekerapplyform',{id});
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

    postlogin(req, res) {
        const result = UserLogin.jobLoginAuth(req.body);
        const { success, message,jobSeekerId } = result;
      
        req.session.isRecuriter =  null;
        req.session.recuriterId = null;      
          // Set the new session data
          req.session.isUser = success;
          req.session.jobSeekerId = jobSeekerId;
      
          console.log(message);
          res.redirect('/viewjobs');
        }
      

    postApply(req,res){
        console.log(req.file)
      const jobListId =   req.params.id;
        const success = Apply.data(req.body,req.file.filename,jobListId,req.session.jobSeekerId,Date.now().toString()+"77");
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