const team = {
    _players:[
      
      {
        firstName: "Pete", 
        lastName:"Wheeler", 
        age: 54
      },
      {
        firstName: "Boban", 
        lastName:"Jankovic", 
        age: 24
      },
      {
        firstName: "Dejan ", 
        lastName:"Dimitrijevic", 
        age: 25
      }
      
      ],
      
      _games:[
        {
         opponent: "Broncos", 
         teamPoints: 42, 
         opponentPoints: 27
        },
        {
         opponent: "Broncos", 
         teamPoints: 42, 
         opponentPoints: 27
        },
        {
         opponent: "Broncos", 
         teamPoints: 42, 
         opponentPoints: 27
        },
      ],
    
  addPlayer(firstName, lastName, age) { 
  let dish = {
        name: firstName,  
        lname: lastName, 
         mage: age
      };
     this.players.push(dish);
  
  },
    
    
    addGame(opp, myPts, oppPts) {
        const game = {
            opponent: opp,
            points: myPts,
            opponentPoints: oppPts
        };
        this.games.push(game);
    },
    
    
    
    
  get players() {
        return this._players;
      },
    
  get games() {
        return this._games;
      },
    
    
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa ', 'Leslie', 44);
  team.addPlayer('Bugs ', 'Bunny', 76);
  
  
  team.addGame('suga', 11, 25);
  team.addGame('muga ', 12, 24);
  team.addGame('buga ', 13, 96);
  
  
  console.log(team._players);
  console.log(team._games);
  
  
  