var app = angular.module('app', []);

app.controller('loadProdutos', function ($scope, $http, $location) {
	$scope.customers = [];

	var url = "api/produtos";
	$http.get(url).then(response => {
		$scope.getDivAvailable = true;
		$scope.customers = response.data;
	}, response => {
		$scope.postResultMessage = "Error Status: " + response.statusText;
	});
});

app.controller('loadLoja', function ($scope, $http, $location) {
	$scope.loja = [];

	var url = "/api/loja";
	$http.get(url).then(response => {
		$scope.getDivAvailable = true;
		$scope.loja = response.data;
	}, response => {
		$scope.postResultMessage = "Error Status: " + response.statusText;
	});
});

app.controller('loadEstoque', function ($scope, $http, $location) {
	$scope.estoque = [];

	var url = "/api/estoque";
	$http.get(url).then(response => {
		$scope.getDivAvailable = true;
		$scope.estoque = response.data;
	}, response => {
		$scope.postResultMessage = "Error Status: " + response.statusText;
	});
});