function Player(name) {
    this.name = name;
    this.level = 1;
    this.Xp = 0;
    this.gainXp = function(exp){
      this.Xp += exp;
      if(this.Xp >= 10){
        this.level += 1;
        this.Xp -=10 ;
      }
    };
    this.describe = function(){
        return this.name +" is level "+ this.level + " with "+ this.Xp + " experience points";
    };
  }
let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); 
console.log(player2.describe()); 

//Q2

class user{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }

  viewdata(){
    return "name: " + this.name +" email: " + this.email;
  }

}
let user1 = new user("andres", "200@georgian.com");
console.log(user1.viewdata());
  
  