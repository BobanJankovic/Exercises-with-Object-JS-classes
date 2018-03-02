class Media {
 constructor(tittle) {
   
 this._tittle="tittle";
 this._isCheckedOut=false;
 this._ratings=[];
 }
   get tittle() {
    return this._tittle;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
toggleCheckOutStatus() {
  this._isCheckedOut = !this._isCheckedOut;
}

  
  getAverageRating() {
    
let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating,0);
    
let averageRating = ratingsSum / this.ratings.length;
return averageRating;
}
  
  
addRating(x){
  this.ratings.push(x);
}
} 




class Book extends Media {
  constructor(author, title, pages) {
  super(title);  //call a constructor of a parent class
  this._author="author";  
  this._pages=54;   
  }
  get author() {
    return this._author;
  
}
  get pages() {
    return this._pages;
  } 
  
}

class Movie extends Media {
  constructor(director, title, runTime) {
  super(title);  
  this._director="director";  
  this._runTime=54;   
  }
  get director() {
    return this._director;
  
}
  get runTime() {
    return this._runTime;
  } 
  
}
  

  
  
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything',544);
  
historyOfEverything.toggleCheckOutStatus();
  
console.log(historyOfEverything.isCheckedOut); 
historyOfEverything.addRating(4) ; 
historyOfEverything.addRating(5) ;
historyOfEverything.addRating(5) ;
historyOfEverything .getAverageRating(); 
console.log(historyOfEverything .getAverageRating());  



 const speed = new Movie('Jan de Bont', 'Speed',116);
 speed.toggleCheckOutStatus();
 console.log(speed.isCheckedOut);
speed.addRating(1) ; 
speed.addRating(1) ;
speed.addRating(5) ;
speed.getAverageRating();
console.log(speed.getAverageRating());