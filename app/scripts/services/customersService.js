(function(){
    angular.module('customersApp').service('customersService', ['$http', function($http){
        
        this.getCustomers = function(){
            return $http.get('/customers');
        };
        
        this.getCustomer = function(customerId){
            return $http.get('/customers/' + customerId);
        };
        
        this.getOrders = function(){
            return $http.get('/orders');
        };
        
        this.deleteCustomer = function(customerId){
            return $http.delete('/customers/' + customerId);
        };
    }]);
})();