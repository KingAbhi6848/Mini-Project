import Apply from "../models/applydata.model.js";
import RecuriterModel from "../models/recuriter.model.js";
import UserLogin from "../models/userlogin.model.js";

export default class RecruiterController{

 signUp(req,res){
    res.render('recuritersignup');
 }
 
 login(req,res){
    res.render('recuriterlogin');
 }

 jobposting(req,res){
    res.render('recuriterjobposting');
 }

 postJobPosting(req,res){
    // console.log(req.body);
    const jobPosted = RecuriterModel.addnewjob(req.body);
        const {success, newjobPost} = jobPosted;

    if(success){
        // console.log(`New Job Posted is:- ${newjobPost}`);
        const jobs = RecuriterModel.getJobList();
        // console.log("JobsList:-",jobs)
        res.redirect('/viewjobs');
    }else{
        console.log('Something went wrong');
    }
 }

 postSignup(req,res){
   const recuriters = UserLogin.recuriterSignup(req.body);
   console.log("Recuriters :-", recuriters );

   res.redirect('/recuriterlogin');
 }

 postLogin(req,res){
   const result = UserLogin.recuriterLogin(req.body);
   const {success,message} = result;
   console.log(message);

   if(success){
      req.session.isRecuriter =  success;
      res.locals.role = 'recruiter';
      console.log(res.locals);

      res.redirect('/viewjobs');
   }else{
      res.redirect('back');
      }
 }

 applicants(req,res){
    const allApplicants = Apply.getAll();
    res.render('viewapplicants',{
      applicants:allApplicants
    });
 }

}