export default class Apply {
    constructor({ name, email},resume) {
        this.name = name;
        this.email = email;
        this.resume = resume;
    }

    static data(data,filename) {
        const newApply = new Apply(data,'/images/'+filename);
        applyData.push(newApply);
        return applyData;
    }
    static getAll(){
        return applyData;
    }
}

const applyData = [];

