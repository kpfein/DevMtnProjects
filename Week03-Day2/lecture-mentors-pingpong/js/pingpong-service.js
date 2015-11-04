angular.module('SampleApp').service('PingPongService', function() {

	var games = [];

	this.getGames = function() {
		return games;
	};
	this.addGame = function(game) {
		games.push(game);
	};
});