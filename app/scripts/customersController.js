(function(){
	angular.module('customersApp').controller('CustomersController', ['$scope', 'customersService', function($scope, customersService){
        
        $scope.predicate = 'name';
        
		function init(){
			customersService.getCustomers()
				.success(function(customers){
					$scope.customers = customers;
				})
				.error();
		}
		init();
        
        $scope.deleteCustomer = function(customerId){
            customersService.deleteCustomer(customerId)
                .success(function(status){
                    if(status){
                        for(var i = 0; i < $scope.customers.length; i++){
                            if($scope.customers[i].id === customerId){
                                $scope.customers.splice(i, 1);
                                break;
                            }
                        }
                    }else{
                        alert("Unable to delete customer");
                    }
                })
                .error();
        };
        
        $scope.sortBy = function(td){
            $scope.sorter = td;  
        };

	}]);
})();