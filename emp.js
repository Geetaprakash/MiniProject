class EmpPData{

    //getter setter Method
    get id(){
        return this._id;
    }
    set id(id){
        this._id=id;
    }
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
        this._name=name;
        else throw 'Incorrect Name';
    }
    get profilePic(){
        return this._profilePic;}
        set profilePic(profilePic){
            this._profilePic=profilePic;
        }
    get gender() {
        return this.gender;}
        set gender(gender)
        {
            this.gender=gender;
        }
    
     get Department() {
            return this.Department;}
            set Department(Department)
            {
                this.Department=Department;
            }
    get Salary() {
             return this.Salary;}
                set Salary(Salary)
                {
                    this.Salary=Salary;
                }
    get Note() {
         return this.Note;}
                    set Note(Note)
                    {
                        this.Note=Note;
                    }
toString(){
    const option ={year:'numeric',month:'long',day:'numeric'};
    const emDate=!this.StartDate? "undefined":
    this.StartDate.toLocalDateString("en-U5",option);
return "id=" +this.id + " name='" +this.name+ ",gender='"+this.gender+ ",Department='"+this.Department+",Salary='"+this.Salary+ ",Note='"+this.Note;
}

window.addEventslistner('DOMContentLoaded',(event)=>{
cont name=document.queryselector('#name');
const textError = document.queryselector('text-error');
name.addEventListener('input', function() {
if(name.valve.length==0){
textError.content="";
return;
}
try{
(new EmployeePayrollData().name =name.valve;;
Texterror.TextContent = e;
} catch (e) {
 textError.textContent = e;
}
}};

const salary = document.queryselector('#salary');
const output = document.queryselector('.salary-output');
output.textContent = salary.value;
salary.addEventlistener('input', function() {
output.textContent =salary.value;
});
});