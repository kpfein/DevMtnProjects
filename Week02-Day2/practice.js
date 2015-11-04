//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?
      //Answer
      // reference to parent element

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?
      //Answer
      // 1. Implicit - left of the dot
      // 2. Explicit - .bind(), .call(), .apply()
      // 3. Default - just bound to the window
      // 4. New - the 'this' inside the function receives the value of the new Object being created. instantiation

  // 3) What is the difference between call and apply?
      //Answer
      // call allows you to use a method and input paramenters into the function. apply allows you to pass an array.

  // 4) What does .bind do?
      //Answer
      // .bind essentially just copies the function/method for use later since it doesn't invoke it right away.
      // returns new, identical function where 'this' is bound to the first argument, you can make it call itself immediately if you want.


//Next Problem////////////////////////////////////////////////////////////////////////////////////

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "kpf",
  email: "kpf@email.com",
  getUsername: function() {
    return this.username;
  }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();



//Next Problem////////////////////////////////////////////////////////////////////////////////////

// Write the function definitions which will make the following function invocations function properly.
var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.moveCar = function() {
    this.move = this.move += 10;
  }
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

console.log(prius);
console.log(mustang);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. 
// You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

// Above you're given the getYear function. 
// Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects 
// being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
getYear.call(prius);
getYear.call(mustang);




//Next Problem////////////////////////////////////////////////////////////////////////////////////

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);
// setTimeout(getUsername, 5000).call(user);

setTimeout(getUsername.bind(user), 5000)

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
  //Answer Here
// undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?
  //Answer Here
// it isn't bound to any object, so it global and bound to the window.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.


















