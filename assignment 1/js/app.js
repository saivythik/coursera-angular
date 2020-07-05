(function (){
'use strict';
angular.module("myapp",[]).controller("mycontroller",mycontroller);
mycontroller.$inject=['$scope'];
function mycontroller($scope){
  $scope.messages= "";
  $scope.stringarr="";
  $scope.checkstr = function (){
    var arr= $scope.stringarr.split(',');
    $scope.result = arr.filter(arr => arr.trim().length > 0);
    $scope.arrlength = $scope.result.length;
  //   if(result.length === 0)
  //   {
  //     $scope.messages="Please enter the data first";
  //     return 0;
  //   }
  //   else{
  //   if(result.length <=3 )
  //   {
  //      $scope.messages = "Enjoy!";
  //      return 1;
  //   }
  //   if(result.length > 3)
  //   {
  //      $scope.messages = "Too Much!";
  //      return 2;
  //   }
  // }
  $scope.messages = $scope.arrlength ? $scope.arrlength >3 ? 'Too
much!' : 'Enjoy!' : 'Please enter data first';
  };
}
})();

