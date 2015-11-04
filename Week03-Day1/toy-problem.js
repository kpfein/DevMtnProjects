// Write a function called reverse that takes in a string and
// reverses that string without using .reverse() on the Array's prototype.


// My solution ////////////////////////////////////////
var stringReverse = function(str) {
	var z = str.split();
	var a = [];
	for(var i = 0; i <= str.length; i++){
		a.push(str.charAt(str.length - i));
	}
	return a.join('');
}

stringReverse("hello, my name is Kyle");


// Other solutions //////////////////////

var reverse = function(str){
	var rev = [],
	str = str.split();
	str.map(function(x){
		rev.unshift(x);
	});
	return rev.join('');
}