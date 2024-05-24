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
    const jobPosted = RecuriterModel.addnewjob(req.body,req.session.recuriterId);
        const {success, newjobPost} = jobPosted;
         
    if(success){
        // console.log(`New Job Posted is:- ${newjobPost}`);
        const jobs = RecuriterModel.getJobList();
        console.log("JobsList:-",jobs)
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
   const {success,message,recuriterid} = result;
   console.log("recuriterPostLogin:- ",message);

   if(success){
      req.session.isUser =null;
      req.session.isRecuriter =  success;
      req.session.recuriterId = recuriterid;
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

 updateJobPosting(req,res){

   const id = req.params.id;
   const jobFound = RecuriterModel.update(id);
   console.log(jobFound);
    res.render('recuriterupdatejobposting',{job:jobFound});

 }
 postupdate(req,res){
   const recuriterid = req.session.recuriterId;
    const result = RecuriterModel.postUpdate(req.body,recuriterid);
    const jobList = RecuriterModel.getJobList();
    console.log('Post Update Job List: -' , jobList);
    console.log("recuritedjsakdj:- ",req.session.recuriterId);
    
      res.redirect('/viewjobs');
 }
 deletePost(req,res){
   RecuriterModel.delete(req.params.id);
   res.redirect('/viewjobs');
 }

}