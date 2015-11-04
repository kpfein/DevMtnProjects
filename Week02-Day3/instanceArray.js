/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.////////////////////////////////////////////////////////////////////

  //code here
var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order.//////////////////////////

  //code here
var user1 = new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS");

var user2 = new User("Cahlan", "cahlan@devmounta.in", "iLoveHashtags");

var user3 = new User("Lenny", "lenny@theLenster.com", "iLoveLentilSoup");

users.push(user1);
users.push(user2);
users.push(user3);

// console.log(users);
//Console.log all of Tylers information/////////////////////////////////////////////////////////////////////////////////////////////////////////

  //code here
console.log("Tyler\'s information is, ");
console.log(users[0]);         //+ user1.name + ", email: " + user1.email + ", password: " + user1.pw + ".");

//Now console.log all of Lennys information///////////////////////////////////////////////////////////////////////////////////////////////////

  //code here
console.log("Lenny\'s information is, "); 
console.log(users[0]);                 // + user2.name + ", email: " + user2.email + ", password: " + user2.pw + ".");


//Now create another instance of User using your own information and then add that to your users array.//////////////////////////////////////

  //code here
var user4 = new User("Kyle", "kp@email.com", "pwkyle");
users.push(user4);


//Now loop through your users Array and console.log every users name. ///////////////////////////////////////////////////////////////////////////

  //code here
for(var i = 0; i < users.length; i++){
  console.log("user" + (i+1) + " name is: " + users[i].name);
}






















