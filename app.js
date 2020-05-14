(function(){
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', function($scope, $filter){

$scope.meal ="";
$scope.message ="";

$scope.checkTooMuch = function(){
	var a = $scope.meal.split(",");
	
	if(a.length - numberOfStringsNotHavingAnything(a) >3){
		$scope.message ="Too much!";
		}
	else if($scope.meal == ""){
		$scope.message ="Please enter data first";
	}
	else{
		$scope.message ="Enjoy!";
	}
	
	}

	
		
	

})

function numberOfStringsNotHavingAnything(a){
	var count =0;
	for(var i=0;i<a.length;i++){
		if(!(hasChar(a[i])))
			count++;
	}
	return count;
}
function hasChar(b){
	
	for(var i=0;i<b.length;i++){
		if(b.charCodeAt(i) != 13) // if string consist only of spaces it is an empty string , 13 is ASCII code for string
				return true;
	}
	return false;
}






})();