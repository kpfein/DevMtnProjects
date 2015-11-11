// Given an arbitrary input string, return the first non-repeated character in the string. 
// For example: 
// firstNonRepeatedCharacter("ABA");  => "B"
// firstNonRepeatedCharacter("AABCABD");  => "C"

// My solution //////////////////////////////////////

var nonRepeat = function(string){
	for(var i = 0; i < string.length; i++){
		var x = string.charAt(i);
		if(string.indexOf(x) === i && string.indexOf(x, i + 1) === -1){
			return x;
		}
	}
	console.log("No non-repeated character");
};

// Other solutions /////////////////////////////

function firstNonRepeatedCharacter(str) {
    for(var i = 0; i< str.length; i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
}

function firstNonRepeatedCharacter(str) {
    var temp;
    for(var i = 0; i < str.length; i++) {
        temp = str.split(str[i]);
        if(temp.length - 1 === 1) {
            return str[i];
        }
    }
}

function firstNonRepeatedCharacter(str){
  var newStr = str.split('');
  var count = newStr.reduce(function(countObj, word){
         countObj[word] = countObj[word] ? ++countObj[word] : countObj[word] = 1;
      return countObj;
  }, {});
  for(var key in count){
    if(count[key] === 1){
      return key;
    }
  }
}

function firstNonRepeatedChar(str){
 for (var i = 0 ; i < str.length; i++){
  var repeated = false; //we havent found a repeated char yet
  for (var j = 0; j < str.length; j++){
     if (j !== i){ //dont compare a char against itself
      if (str[i] === str[j]){
         repeated = true; //we found a repeat
      }
     }
  }
  if (repeated === false){
     return str[i]; //this char wasnt repeated
  }
 }
 return -1; //nothing was repeated
}






