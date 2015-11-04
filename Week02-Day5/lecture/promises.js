function promise(){
	return {
		neatBird: "western meadowlark",
		then: function(cb) {
			cb('callback invoked');
		},
	};
};

// var newObj = promise();
// newObj.then();

promise().then(function(data)){
	console.log(data);
}