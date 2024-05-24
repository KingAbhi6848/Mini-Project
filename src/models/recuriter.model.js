export default class RecuriterModel{

    constructor(jobId,recuriterId,{jobTitle, companyName,location,jobDescription,skillsRequired,experience}){
        this.jobId = jobId,
        this.recuriterId = recuriterId,
        this.jobTitle = jobTitle,
        this.companyName = companyName,
        this.location = location,
        this.jobDescription = jobDescription,
        this.skillsRequired = skillsRequired,
        this.experience = experience;
    }

    static addnewjob(jobdetails,recuriterId){
      const newjobPost = new RecuriterModel(Date.now().toString(),recuriterId,jobdetails);
       jobList.push(newjobPost);
   return {success:true, newjobPost};
    }

    static getJobList(){
        return jobList;
    }
    static update(id){
        console.log('id :-', id)
      const jobFound =  jobList.find(job=> job.jobId == id);
      console.log("model: ", jobFound)
      return jobFound;
    
    }
}

const jobList =[{
    jobId : Date.now().toString(),
    recuriterId : 1234,
    jobTitle: 'Software Engineer',
    companyName: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    jobDescription: 'Develop and maintain web applications.',
    skillsRequired: 'JavaScript, HTML, CSS, React, Node.js',
    experience: 3
}];