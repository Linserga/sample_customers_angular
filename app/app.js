(function(){
	angular.module('customersApp', ['ngRoute']);

	angular.module('customersApp').config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'app/views/customers.html',
				controller: 'CustomersController'
				}
			)
			.when('/orders/:customerId', {
					templateUrl: 'app/views/orders.html',
					controller: 'OrdersController'
				}
			)
			.when('/orders', {
					templateUrl: 'app/views/allorders.html',
					controller: 'AllOrdersController'
				}
			)
			.otherwise({redirectTo: '/'});
	});
})();