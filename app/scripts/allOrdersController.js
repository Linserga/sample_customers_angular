(function(){
    angular.module('customersApp').controller('AllOrdersController', ['$scope', 'customersService', function($scope, customersService){
      
    function init(){
        customersService.getOrders()
            .success(function(orders){
                $scope.orders = orders;
                total();
        })
            .error();
    }
        
    init();
        
    function total(){
            var total = 0;
        
            for(var i = 0; i < $scope.orders.length; i++){
                total += $scope.orders[i].total;
            }
        $scope.ordersTotal = total;
    }
        
    }]);
})();

