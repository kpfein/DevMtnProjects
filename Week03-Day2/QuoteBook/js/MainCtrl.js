angular.module("quoteBook").controller("MainCtrl", function($scope, dataService){
	
	$scope.getData = function(){
		$scope.quotes = dataService.getData();
	}();

	$scope.newQuote = {
		text: "",
		author: ""
	}

	$scope.addQuote = function(){
		dataService.addData($scope.newQuote);
		$scope.newQuote = {
		text: "",
		author: ""
		}
	}

	$scope.removeQuote = function(){
		dataService.removeData($scope.remove);
		$scope.remove = "";
	}


	$scope.search = {};
	$scope.userInput = {};

	$scope.sorter = function() {
	    for(text in $scope.userInput) {
	        $scope.search[text] = $scope.userInput[text];
	        $scope.userInput.text = "";
	    }

	    $scope.clearSorter = function(){
	    	$scope.search = {};
		}
	};


});






