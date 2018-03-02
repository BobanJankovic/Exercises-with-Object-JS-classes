let menu = {
    _courses : {
      
      _appetizers: [],
      _mains: [],
      _desserts: [],
      
      
      
      get appetizers() {
           console.log(`There are ${this._appetizers} na meniju.`);
       return this._appetizers;
    },
      
      set appetizers(appetizerIn) {
    if (typeOf appetizerIn === 'object') {
         this._appetizers = appetizerIn;
     } else {
         console.log(`Change ${appetizerIn} to a object-array.`)
     }
    },
      
      
 
      get mains() {
           console.log(`There are ${this._mains} na meniju.`);
       return this._mains;
    },
      
      set mains(mainsIn) {
 if (typeOf mainsIn === 'object') {
         this._mains = mainsIn;
     } else {
         console.log(`Change ${mainsIn} to a object-array.`)
     }
    },
      
 
      get desserts() {
           console.log(`There are ${this._desserts} na meniju.`);
       return this._desserts;
    },
      
      set desserts(dessertsIn) {
 if (typeOf dessertsIn === 'object') {
         this._desserts = dessertsIn;
     } else {
         console.log(`Change ${dessertsIn} to a object-array.`)
     }
    },
 }, //ovde se zavrsava course tacno samo da li treba da bude jednako stringu ili nesto drugo s obzirom da je arej u pitanju
   
   
   
  get courses () {
  return {
    appetizers: this._courses.appetizers,  //app:je key a this.courses.app time pozivamo value
    mains: this._courses.mains, 
    desserts:this._courses.desserts,
  };  
  }, // zavrsava se courses getter tacno ovo je korak 6
   
   //this part isnt ok, from line 62 to 76
   
   addDishToCourse(courseName,dishName,dishPrice ) {
    const dish= {
       name:////
       price:////
     };
   this._courses[courseName].push(dish); 
   }, 
   
   getRandomDishFromCourse(courseName) {
     
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length); 
   },
   
   
   
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
     const mains = this.getRandomDishFromCourse('mains'),
     const desserts = this.getRandomDishFromCourse('desserts'),
           
     const totalPrice = appetizer.price + mains.price+desserts.price;
 
     return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;
   };
    
 };
 let meal = menu.generateRandomMeal();
 console.log(meal);
 