/* Write a function called combinator that is given two arrays as arguments. 
The first array is an array of first names, and the second array is an 
array of last names. Have the function return a new array combining
the first names and the last names. */

//My solution

var combinator = function(arr1, arr2) {
	var newArray = [];
	for(var i = 0; i < arr1.length; i++){
		for(var j = 0; j < arr2.length; j++){
			if( i === j){
			newArray.push(arr1[i] + " " + arr2[i]);
			}
		}
	}
	return newArray;
}

combinator(["Jason", "Dan", "Cahlan"], ["Turner", "Kesler", "Sharp"]);


//Another solution

for(var i = 0; i < arr1.length; i++){
	newArr.push(arr1[i] + " " + arr2[i]);
}