//Write a function called ABCheck that takes a string parameter and returns the string true if the characters
//a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would 
//result in true because there is exactly three characters between a and b). Otherwise, return the string false;


//My solution ///////////////////////////////////////////
var ABCheck = function(str){
	var newStr = str.slice().toLowerCase();
	for(var i = 0; i < str.length; i++){
		if((newStr.charAt(i) === "a" && newStr.charAt(i + 4) === "b") || (newStr.charAt(i) === "b" && newStr.charAt(i + 4) === "a")){
			return true;
		}
	}
	return false;
};


ABCheck("lane borrowed");


//other solutions ////////////////////////////////////

// var ABCheck = function(str){
// 	for(var i = 0; i < str.length; i++){
// 		if(str.match("a" + "   " + "b")) {
// 			return true;
// 		}
// 	}
// 	return false;	
// };

// ABCheck("lane borrowed");


