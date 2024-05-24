export default class UserLogin{
  
    constructor({firstName,lastName,email,phone,password}){
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.phone = phone,
        this.password = password;
    }

    static addJobSeeker(userDetails){
        const newJobSeeker = new UserLogin(userDetails);
        jobSeeker.push(newJobSeeker);
        return {success:true ,newJobSeeker };
    }

    static getJobSeeker(){
        return jobSeeker;
    }

    static jobLoginAuth(details){
       for(let i=0; i<jobSeeker.length ; i++){
        if(details.email == jobSeeker[i].email && details.password == jobSeeker[i].password){
            return {success:true , message: 'User Logged in Successfully'};
        }
       
       }
       return  {success:false , message: 'Invalid Details'};
    }


    static recuriterSignup(details){
        const newRecuriter = new UserLogin(details);
        recuriter.push(newRecuriter);
        return recuriter;
    }

    static recuriterLogin(details){
        for(let i =0; i<recuriter.length;i++){
            if(details.email == recuriter[i].email && details.password == recuriter[i].password){
                return {success:true, message:"Recuriter Logged In Successfully"}
            }
        }
        return {success:false,message:"Recuriter Failed to Login"};
    }

    static getRecuriter(){
        return recuriter;
    }

  }
  


const jobSeeker = [{
    firstName:'abhi',
    lastName:'sharma',
    phone:524752144,
    email:'as684844@gmail.com',
    password:'1'
}];
const jobSeekerApply=[];
const recuriter =[{
    firstName:'keshav',
    lastName:'Maharaj',
    phone:524755744,
    email:'keshav@gmail.com',
    password:'1'
}];