angular.module('SampleApp').service('MentorService', function() {

	var secret = "awesomeness";

	var mentors = [
		{name: "The Honorable Jason Turner"},
		{name: "Charles Edward Cantrell III"},
		{name: "Leo Prates I, Esquire"},
		{name: "Sir Wilson Parrish"},
		{name: "Dr. Doug Sebastian"}
	];

	this.getMentors = function() {
		return mentors;
	};
	this.addMentor = function(mentor) {
		mentors.push(mentor);
	};
});