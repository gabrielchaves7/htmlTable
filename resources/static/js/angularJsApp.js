var app = angular.module('app', []);
var app2 = angular.module('app2', []);
var app3 = angular.module('app3', []);
var app4 = angular.module('app4', []);
var app5 = angular.module('app5', []);



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

app2.controller('loadLoja', function ($scope, $http, $location) {
	$scope.loja = [];

	var url = "/api/loja";
	$http.get(url).then(response => {
		$scope.getDivAvailable = true;
		$scope.loja = response.data;
	}, response => {
		$scope.postResultMessage = "Error Status: " + response.statusText;
	});
});

app3.controller('jsLoadEstoque', function ($scope, $http, $location) {
	$scope.estoque = [];

	var url = "/api/estoque";
	$http.get(url).then(response => {
		$scope.getDivAvailable = true;
		$scope.estoque = response.data;
	}, response => {
		$scope.postResultMessage = "Error Status: " + response.statusText;
	});
});

app4.controller('jsLoadProdutoID', function ($scope, $http, $location) {
	$scope.IDs = [];

	function getIDs() {
		var url = "/api/produtoIDS/all";
		$http.get(url).then(response => {
			$scope.getDivAvailable = true;
			$scope.IDs = response.data[0];
		}, response => {
			$scope.postResultMessage = "Error Status: " + response.statusText;
		});
	}

	getIDs();
});

app5.controller('jsLoadLojaID', function ($scope, $http, $location) {
	$scope.IDs = [];

	function getIDs() {
		var url = "/api/lojaIDS/all";
		$http.get(url).then(response => {
			$scope.getDivAvailable = true;
			$scope.IDs = response.data[0];
		}, response => {
			$scope.postResultMessage = "Error Status: " + response.statusText;
		});
	}
	getIDs();
});