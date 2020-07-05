(function (){
	'use strict';
	angular.module("LunchCheck",[]).contoller("LunchCheckController",LunchCheckController);
	LunchCheckController.$inject=[$scope];
	function LunchCheckController($scope){
	$scope.message="";
	$scope.str=""
	$scope.checkf=function(){
		var arr=$scope.str.split(',');
		$scope.result=arr.filter(arr=> arr.trim.length > 0)
		$scope.alen=$scope.result.length;
		$scope.message=$scope.result.length ? $scope.length>3 "Too much!":"Enjoy!":"Please enter data first";
	};
}

})();