angular.module("friendsList").controller("mainCtrl", function($scope){
	$scope.friendsList = ["Kyle", "Phil", "Jonah", "Evan"];
	$scope.addFriend = function(newFriend) {
		$scope.friendsList.push(newFriend);
		$scope.newFriendInput = '';
	};
});