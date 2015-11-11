//Write a function that accepts a number and returns a boolean based on whether its a prime number.

//My solution

var primeFinder = function(num) {
	if(num % 2 === 0 || num <= 1){
        return false;
    }
	if(num === 2 || num === 3){
		return true;
	}
	for(var i = 3; i <= (num/2); i++){
		if(num % i === 0){
			return false;
		}
	}
	return true;
};

primeFinder(44);