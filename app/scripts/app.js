'use strict';
var server="http://123.56.227.177:2504"
/**
 * @ngdoc overview
 * @name koApp
 * @description
 * # koApp
 *
 * Main module of the application.
 */
angular
  .module('koApp', ['ui.router']).controller("app",function($scope,$http){
	  $scope.abc={ff:2}
	}).config(function ($stateProvider){
  	$stateProvider.state("a",{
  		url:"/a",
  		templateUrl:"views/frx.html",
  		controller:"a"
  	})
	}).directive("bb",function(){
		return{
			restrict:"ECMA",
			scope:{date:"=ccc"},
			replace:true,
			template:"<input type='text' ng-model='date.ff'/>",
			link:function(scope,el,attr){}
		}
	}).directive("xx",function($http){
		return{
			restrict:"ECMA",
			templateUrl:"views/tpl.html",
			scope:true,
			replace:true,
			link:function(s,e,a){
				s.uid=a['uid']
				var url=a['url']
				$http({
					url:"http://47.90.20.200:1510"+url,
					method:"get"	
				}).success(function(e){
					s.datex=e
				})
			}
		}	
	});
