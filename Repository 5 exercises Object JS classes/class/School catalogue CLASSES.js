class School {
    constructor(name, level, numberOfStudents) {
     this._name='name';
     this._level='level';
     this._numberOfStudents=54;
    }  
   
     
   get name() {
     return this._name;
     }  
   get level() {
     return this._level;
     }  
   get numberOfStudents() {
     return this._numberOfStudents;
     }    
   
   quickFacts() {
   console.log(`${this._name} educates ${this._numberOfStudents} students, typically between the ages of ${this._level}.`);
     
   }  
     
   static pickSubstituteTeacher(substituteTeachers) {
   const myIndex = Math.floor(substituteTeachers.length*Math.random());
     return substituteTeachers[myIndex];
   
   }  
    
     
   set newNumberOfStudents(newNumber) {
     if (typeof newNumber === 'number') {
         this._numberOfStudents = newNumber;
         console.log(`${newNumber} is valid input.`);
     } else {
         console.log(`Change ${newNumber} to a number.`)
     }
   }
   }
   
   
   School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
   
   console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
   
   
   
   class PrimarySchool extends School {
     constructor(name, numberOfStudents,pickupPolicy) {
   super(name,'primary',numberOfStudents);//KONSTRUKTORE RODITELJA ZALIM DA ASIGNUJEM OVU VREDNOST TVOM THIS.NAME PEROPERTIJU
    this._pickupPolicy="something";
     }  
     
    get pickupPolicy() {
     return this._pickupPolicy;
   } 
     
     
     
   }
   
   
   
   class HighSchool extends School {
     constructor(name, numberOfStudents,sportsTeams) {
   super(name, "high" , numberOfStudents);
    this._sportsTeams=sportsTeams;
     }  
     
    get sportsTeams() {
     return this._sportsTeams;
   } 
     
     
     
   }
   
   
   const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
   
   lorraineHansbury.quickFacts();
   
   
   const alSmith = new HighSchool('Al E. Smith', 415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
   
   console.log(alSmith.sportsTeams);
   
   
   
   
   
   
   
   
   
   
   
   
   
   

