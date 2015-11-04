// Write a function that takes in a number and returns the factorial of that number. Ex: factorial(5) returns 120 because 5 * 4 * 3 * 2 * 1 === 120


// My Solution //////////////////////////

var factorialFunc = function(x){
	var z = [];
	while(x > 0){
		z.push(x)
		x--;
	}

	var y = 1;
	for(var i = 0; i < z.length; i++){
		y *= z[i];
	}
	if(y !== 1) {
	    return y;
	};
}

factorialFunc();



// Other solutions ////////////////////

var factorialFunc = function(x){
	var result = 1;
	for(var i = 1; i <= x; i++){
		result *= i;
	}
	return result;
}

factorialFunc();
