/**
 * Created by Rashmika on 16-07-2015.
 */
describe('testing controller', function(){
    var $scope,
        controller;
   beforeEach(function(){
      module('pieApp');
       inject(function($controller){
           $scope = {};
           controller = $controller('pieController', {$scope: $scope});
       });
   });
    it('should initialize slice', function(){
       expect($scope.slice).toEqual(8);
    });
    it('eatSlice should decrement slice', function(){
       $scope.eatSlice();
        expect($scope.slice).toEqual(7);
    });
    it('should return null if there no slice', function(){
       $scope.slice = 0;
        var temp = $scope.eatSlice();
        expect(temp).toBeNull();
    });
});