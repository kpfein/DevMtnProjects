//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item in the given array.

  //Code Here
var first = function(arr){
  return arr[0];
}

first(arr);



//Next Problem/////////////////////////////////////////////////////////////////////////

var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item in the given array.

  //Code Here
var last = function(arr) {
  return arr[arr.length - 1];
}

last(arr);



//Next Problem/////////////////////////////////////////////////////////////////////////

var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  //Code Here
var looper = function(family){
  for(var i = 0; i < family.length; i++){
    alert(family[i]);
  }
}

looper(family);



//Next Problem/////////////////////////////////////////////////////////////////////////

var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument 
//and loops through the given array backwards alerting every item in the array starting at the end.

  //Code Here
var reversedLooper = function(letters) {
  for(var i = letters.length - 1; i >= 0; i--){
    alert(letters[i]);
  }
}

reversedLooper(letters);



//Next Problem/////////////////////////////////////////////////////////////////////////

var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  //Code Here
var evenFinder = function(nums){
  for(var i = 0; i < nums.length; i++){
    if((nums[i] % 2) !== 0){
      delete nums[i];
    }
  }
}

evenFinder(nums);

console.log(nums);



//Next Problem/////////////////////////////////////////////////////////////////////////

var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) 
//and the second item in the Array being the odds array(all the odd values from nums).

  //Code Here
var divider = function(nums, evens, odds){
  for(var i = 0; i < nums.length; i++){
    if((nums[i] % 2) !== 0){
      odds.push(nums[i]);
    } else {
      evens.push(nums[i]); 
    }
  }
  nums.splice(0, nums.length);
  nums.push(evens);
  nums.push(odds);
  return nums;
}

divider(nums, evens, odds);



//Next Problem/////////////////////////////////////////////////////////////////////////

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30, and an array full of numbers. 
//Your job is to write a function named finder that will get a random number, then loop through the array to see if that random number is in the array. 
//If it is, return true, if it's not, return false

  //Code Here
var finder = function(){
  var num = getRandomArbitrary();
  var i = 0;
  while (i <numbers.length){
    if(numbers[i] === num){
      return true;
    }
    i++;
  }
  return false;
}

finder();



//Next Problem/////////////////////////////////////////////////////////////////////////

var str = 'this is my sentence';
//Write a function called reverse that takes a given str as it's only argument and returns that string after it's been reversed

  //Code Here
var reverse = function(str){
  return str.split('').reverse().join('');
}

reverse(str);



//Next Problem/////////////////////////////////////////////////////////////////////////

var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. 
  
  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list. 
  
  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

  //Code Here
var removeItem = function(myGroceryList, item){
  for(var i = 0; i < myGroceryList.length; i++){
    if(myGroceryList[i] === item){
      myGroceryList.splice(myGroceryList.indexOf(item),1);
      return myGroceryList;
    }
  }
}

var addItem = function(myGroceryList, item2) {
  myGroceryList.push(item2);
  return myGroceryList;
}
removeItem(myGroceryList, 'chips') // --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
addItem(myGroceryList, 'Jerky') // --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem/////////////////////////////////////////////////////////////////////////

//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  //Code Here
var maker = function(){
  var x = [];
  for(var i = 1; i < 216; i++) {
    x.push(i);
  }
  return x;
}

maker();



//Next Problem/////////////////////////////////////////////////////////////////////////

var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

  //Code Here
var addTen = function(numbers) {
  for(var i = 0; i < numbers.length; i++) {
    var z = Number(numbers[i]);
    var x = z + 10;
    numbers.splice(i, 1, x);
  }
  return numbers;
}

addTen(numbers);



//Next Problem/////////////////////////////////////////////////////////////////////////////

var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number of values to both arr1 and arr2.
//Write a function that is given arr1 and arr2 as it's only arguments. Return the array which is longest.

  //Code Here
var whichLongest = function(arr1, arr2) {
  if(arr1.length > arr2.lenth){
    return (arr1);
  } else {
    return (arr2);
  }
}

// whichLongest(arr1, arr2);
console.log("arr1: " + arr1);
console.log("arr2: " + arr2);


/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
  'both' should return a new array full of numbers that are found in both arr1 and arr2.
*/

  //Code Here
var both = function(arr1, arr2){
  var newArray = [];
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        newArray.push(arr1[i])
      }
    }
  }
  return newArray;
}
  
both(arr1,arr2);



//NEXT PROBLEM////////////////////////////////////////////////////////////

var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

  //Code Here
devMountainEmployees[0] = tyler;
devMountainEmployees[1] = cahlan;
devMountainEmployees[2] = ryan;
devMountainEmployees[3] = colt;
console.log(devMountainEmployees.length);

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

  //Code Here
devMountainEmployees.splice(devMountainEmployees.indexOf(cahlan), 1);
console.log(devMountainEmployees);



//Next Problem/////////////////////////////////////////////////////////////////////////

/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];

/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

  //Code Here
var users = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

//include this as one of the objects in your array.
//Your Code Here
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
};

var user2 = {
  name: "Kyle Feinauer",
  email: "kf@gmail.com",
  password: "123",
  username: "kf",
}

var user3 = {
  name: "Phil Edel",
  email: "pe@gmail.com",
  password: "321",
  username: "pe",
}

users[0] = user1;
users[1] = user2;
users[2] = user3;

console.log(users);
/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full of objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular index he's located in, delete him from the array.*/

  //Code Here
var findValue = function(array, key, value) {
  for(var i = 0; i < array.length; i++){
    if(array[i][key] === value){
      users.splice(users.indexOf(array[i]), 1);
      return array[i];
    }
  }
  return null;
}

findValue(users, "email", "tylermcginnis33@gmail.com");
console.log(users);

//The activity we just did is very much how data works in 'the real world'.









