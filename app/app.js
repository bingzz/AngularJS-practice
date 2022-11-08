// MODULE
var moduleTest = angular.module("moduleTest", ["ngRoute"]);

moduleTest.config([
	"$routeProvider",
	function ($routeProvider) {
		$routeProvider
			.when("/Home", {
				templateUrl: "/views/Home.html",
			})
			.when("/directory", {
				templateUrl: "/views/directory.html",
				controller: "ModuleController",
			})
			.otherwise({
				redirectTo: "/Home",
			});
	},
]);

moduleTest.controller("ModuleController", [
	"$scope",
	function ($scope) {
		// $scope.message = "Hello";
		// $scope.cars = ["toyota", "honda", "suzuki"];

		// existing data
		$scope.clothes = [
			{
				brand: "calvin klein",
				color: "green",
				rate: 2,
				available: true,
				thumb: "/app/src/Calvin.png",
			},
			{
				brand: "penshoppe",
				color: "black",
				rate: 3.2,
				available: true,
				thumb: "/app/src/41b2eed3b3d5984fca84fed35f052740.jpg",
			},
			{
				brand: "bench",
				color: "gray",
				rate: 4.1,
				available: false,
				thumb: "/app/src/BENCH-logo.jpg",
			},
			{
				brand: "adidas",
				color: "red",
				rate: 4.6,
				available: true,
				thumb: "/app/src/Original_Adidas_logo.svg.png",
			},
		];

		// Remove Clothing
		$scope.removeClothing = function (clothe) {
			var removeItem = $scope.clothes.indexOf(clothe);

			$scope.clothes.splice(removeItem, 1);
		};

		// Add clothing
		// scopeName.modelName.objectProperty
		$scope.addClothing = function () {
			if ($scope.newClothing.brand == "" || $scope.newClothing.color == "" || $scope.newClothing.rate == "") return;

			$scope.clothes.push({
				brand: $scope.newClothing.brand,
				color: $scope.newClothing.color,
				rate: parseFloat($scope.newClothing.rate),
				available: true,
			});

			$scope.newClothing.brand = "";
			$scope.newClothing.color = "";
			$scope.newClothing.rate = "";
		};
	},
]);
// moduleTest.config(function () {});

// moduleTest.run(function () {});

// moduleTest.controller("ModuleController", [
// 	"$scope",
// 	"dependencies",
// 	function ($scope, dependencies) {
// 		$scope.message = "Hello";

// 		$scope.cars = ["toyota", "honda", "suzuki"];
// 	},
// ]);
