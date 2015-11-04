angular.module("userProfiles").controller("MainController", function($scope, UserService) {

	$scope.getUsers = function(users){
		$scope.users = UserService.getUsers();
	}();
});