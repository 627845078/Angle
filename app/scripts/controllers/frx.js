angular.module("koApp").controller("a",function ($scope,$http) {
	$scope.add=function(){
		$http({
			url:server+"/test1510",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			$scope.data.push(e)
		})
	}
	$scope.del=function(e){
		$http({
			url:server+"/test1510/"+e.id,
			method:"delete"
		}).success(function(){
			$scope.data.splice($scope.data.indexOf(e),1)
		})
	}//$rootscope  根scope
	$http({
		url:server+"/test1510",
		method:"get"
	}).success(function(e){
		$scope.data=e
	})
	
	$scope.dels=function(e){
		$scope.deit=e;//PUT 修改
	}
	$scope.deit=function(){
		$http({
			url:server+"/test1510/"+$scope.deit.id,
			method:"PUT",
			data:$scope.deit
		})	
	}
})