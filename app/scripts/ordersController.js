(function(){
    angular.module('customersApp').controller('OrdersController', ['$scope', 'customersService', '$routeParams',function($scope, customersService, $routeParams){
        
        var customerId = $routeParams.customerId;
        
        function init(){
            customersService.getCustomer(customerId)
                .success(function(customer){
                    $scope.customer = customer;
            })
                .error()
        }
        
        init();        
    }]);
})();