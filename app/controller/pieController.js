/**
 * Created by Rashmika on 16-07-2015.
 */
var myApp = angular.module('pieApp',[]);
myApp.controller('pieController', ['$scope', function($scope){
    $scope.eatSlice = function(){
        if($scope.slice > 0){
            $scope.slice--;
        }else{
            return null;
        }
    }
    $scope.slice = 8;
}]);