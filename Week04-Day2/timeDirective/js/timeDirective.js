angular.module("timeApp").directive("showTime", function($interval){

	return {
		restrict: "E",
		template: "<div>The current time is {{time}}</div>",
		link: function(scope, element, attrs){
			var currentTime = new Date();
			scope.time = currentTime.toString();
			$interval(function(){
				scope.time = new Date().toString()
			}, 1000);
		}
	}

});