export default class RecuriterModel{

    constructor({jobTitle, companyName,location,jobDescription,skillsRequired,experience}){
        this.jobTitle = jobTitle,
        this.companyName = companyName,
        this.location = location,
        this.jobDescription = jobDescription,
        this.skillsRequired = skillsRequired,
        this.experience = experience;
    }

    static addnewjob(jobdetails){
      const newjobPost = new RecuriterModel(jobdetails);
       jobList.push(newjobPost);
   return {success:true, newjobPost};
    }

    static getJobList(){
        return jobList;
    }
}

const jobList =[{
    jobTitle: 'Software Engineer',
    companyName: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    jobDescription: 'Develop and maintain web applications.',
    skillsRequired: 'JavaScript, HTML, CSS, React, Node.js',
    experience: 3
}];