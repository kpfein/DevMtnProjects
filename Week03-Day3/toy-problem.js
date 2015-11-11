// Write a Function called simpleSymbols that takes in a string parameter and determines
// if it is an acceptable sequence by either returning true or false. The str parameter will be composed of + and = symbols with several
// letters between them (ie. '++d+===+c++==a'.) For the result to be true each letter must be surrounded by a + symbol. So, the string to the
// left would be false. The string will not be empty and will have at least one letter.

var simpleSymbols = function(str){

	var z = [];
	for(var i = 0; i < str.length; i++){
		z.push(str.charCodeAt(i));
	}

	var v = true;
	for(var j = 0; j < z.length; j++){
		debugger;
		if((z[j] >= 65 && z[j] <= 90) || (z[j] >= 97 && z[j] <= 122)){
			if(!(z[j +1] === 43) && (z[j -1] === 43)){
				v = false;
				break;
			}
		} 
	} return v;

};


var simpleSymbols = function(str){
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var newStr = str.toLowerCase();
	for(var i = 0; i < newStr.length; i++){
		if(alphabet.indexOf(newStr[i]) !== -1 && newStr[i - 1] !== "+" && newStr[i - 1] !== "+"){
			return false;
		}
		if(alphabet.indexOf(newStr[i]))
	}
}