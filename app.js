var app = angular.module("mainApp", [
//  'ngRoute'
]);

//app.controller("mainCtrl", MainCtrl);
//app.controller("createCtrl", CreateCtrl);
app.controller("listCtrl", ListCtrl);

/*
var configProviders = function($routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.
	  when('/create', {
		  templateUrl: views/create.ng',
		  controller: createCtrl,
		  controllerAs: 'createCtrl'
      }).
//	  when('/list', {
//		  templateUrl: /views/list.ng',
//		  controller: listCtrl,
//		  controllerAs: 'listCtrl'
//      }).
//	  when('/print', {
//		  templateUrl: /views/print.ng',
//		  controller: printCtrl,
//		  controllerAs: 'printCtrl'
//      }).
//	  when('/add', {
//		  templateUrl: /views/add.ng',
//		  controller: addCtrl,
//		  controllerAs: 'addCtrl'
//      }).
//	  when('/edit', {
//		  templateUrl: /views/edit.ng',
//		  controller: editCtrl,
//		  controllerAs: 'editCtrl'
//      }).
	  otherwise({
		  redirectTo: '/create'
      });
});

app.config(configProviders);
*/