(function(){
	angular.module('customersApp').directive('myHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/views/header.html'
		};
	})
})();