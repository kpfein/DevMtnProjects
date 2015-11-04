// Write a function that takes an array of numbers & replaces all of the odd numbers with the letter 'o'.


// My solution ////////////////////////
var x = [1,2,3,4,5,6,7,8,9,10];

var replace = function(arr){
	for (var i = 0; i < x.length; i++){
		if(arr[i] % 2 !== 0){
			arr.splice(i-1, 1, "o");
		}
	}
	return arr;
}

console.log(replace(x));



// other solutions ///////////////////

var replace = function(arr){
	var newArr = arr.slice();
	for (var i = 0; i < x.length; i++){
		if(newArr[i] % 2 !== 0){
			newArr.splice(i-1, 1, "o");
		}
	}
	return newArr;
}

