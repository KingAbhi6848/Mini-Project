export default class UserLogin {

    constructor({ id, firstName, lastName, email, phone, password }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    static addJobSeeker(userDetails) {
        const id = UserLogin.generateId();
        const newJobSeeker = new UserLogin({ id, ...userDetails });
        jobSeekers.push(newJobSeeker);
        return { success: true, newJobSeeker };
    }

    static getJobSeekers() {
        return jobSeekers;
    }

    static jobLoginAuth(details) {
        for (let i = 0; i < jobSeekers.length; i++) {
            if (details.email === jobSeekers[i].email && details.password === jobSeekers[i].password) {
                return { success: true, message: 'User Logged in Successfully' };
            }
        }
        return { success: false, message: 'Invalid Details' };
    }

    static recruiterSignup(details) {
        const id = UserLogin.generateId();
        const newRecruiter = new UserLogin({ id, ...details });
        recruiters.push(newRecruiter);
        return { success: true, newRecruiter };
    }

    static recruiterLogin(details) {
        for (let i = 0; i < recruiters.length; i++) {
            if (details.email === recruiters[i].email && details.password === recruiters[i].password) {
                return { success: true, message: 'Recruiter Logged In Successfully' };
            }
        }
        return { success: false, message: 'Recruiter Failed to Login' };
    }

    static getRecruiters() {
        return recruiters;
    }

    static generateId() {
        return Date.now().toString();
    }
}

// Mock data for job seekers and recruiters
const jobSeekers = [{
    id: Date.now().toString(),
    firstName: 'abhi',
    lastName: 'sharma',
    phone: 524752144,
    email: 'as684844@gmail.com',
    password: '1'
}];

const recruiters = [{
    id: Date.now().toString(),
    firstName: 'keshav',
    lastName: 'Maharaj',
    phone: 524755744,
    email: 'keshav@gmail.com',
    password: '1'
}];
