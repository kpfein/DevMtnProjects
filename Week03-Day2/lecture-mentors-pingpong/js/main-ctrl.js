angular.module('SampleApp').controller('MainCtrl', function($scope, MentorService, PingPongService) {

	$scope.newMentor = {
		name: ""
	};

	$scope.mentors = MentorService.getMentors();
	
	$scope.createMentor = function() {
		MentorService.addMentor($scope.newMentor);
		$scope.newMentor = {
			name: ""
		};
	};

	$scope.pingpong_games = PingPongService.getGames();

	$scope.saveGame = function() {
		PingPongService.addGame($scope.newGame);
		$scope.newGame = {};
	};
});