// MODULE
var moduleTest = angular.module("moduleTest", ["ngRoute", "ngAnimate"]);

moduleTest.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {

    // uses HTML URL
    $locationProvider.html5Mode(true);

    $routeProvider
      .when("/Home", {
        templateUrl: "/views/Home.html",
        controller: "ModuleController",
      })
      .when("/directory", {
        templateUrl: "/views/directory.html",
        controller: "ModuleController",
      })
      .when("/contact", {
        templateUrl: "/views/contact.html",
        controller: "ContactController",
      })
      .when("/contact-success", {
        templateUrl: "/views/contact-success.html",
        controller: "ContactController",
      })
      .otherwise({
        redirectTo: "/Home",
      });
  },
]);

moduleTest.controller("ModuleController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    // $scope.message = "Hello";
    // $scope.cars = ["toyota", "honda", "suzuki"];

    // existing data
    // $scope.clothes = [
    //   {
    //     brand: "calvin klein",
    //     color: "green",
    //     rate: 2,
    //     available: true,
    //     thumb: "/app/src/Calvin.png",
    //   },
    //   {
    //     brand: "penshoppe",
    //     color: "black",
    //     rate: 3.2,
    //     available: true,
    //     thumb: "/app/src/41b2eed3b3d5984fca84fed35f052740.jpg",
    //   },
    //   {
    //     brand: "bench",
    //     color: "gray",
    //     rate: 4.1,
    //     available: false,
    //     thumb: "/app/src/BENCH-logo.jpg",
    //   },
    //   {
    //     brand: "adidas",
    //     color: "red",
    //     rate: 4.6,
    //     available: true,
    //     thumb: "/app/src/Original_Adidas_logo.svg.png",
    //   },
    // ];

    // display console
    // console.log($scope.clothes)
    // console.log(angular.toJson($scope.clothes));

    // Remove Clothing
    $scope.removeClothing = function (clothe) {
      var removeItem = $scope.clothes.indexOf(clothe);

      $scope.clothes.splice(removeItem, 1);
    };

    // Add clothing
    // scopeName.modelName.objectProperty
    $scope.addClothing = function () {
      if (
        $scope.newClothing.brand == "" ||
        $scope.newClothing.color == "" ||
        $scope.newClothing.rate == ""
      )
        return;

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

    $scope.removeAll = function() {
      $scope.clothes = []
    }

    // http request
    $http.get("../data/clothes.json").then(function (response) {
      $scope.clothes = response.data;

      //   console.log($scope.clothes)
      //   console.log(angular.toJson($scope.clothes))
    });
  },
]);

// create a custom html element
moduleTest.directive("randomClothes", [
  function () {
    return {
      // A - Attribute
      // E - Element

      // can combine restrictions
      restrict: "E",
      // pass data thru the directive
      scope: {
        // attributes from the html
        clothes: "=",
        title: "=",
      },

      //   template: "{{title}}", add a text
      // insert an image
      //   template: "<img ng-src='{{clothes[random].thumb}}' />",
      templateUrl: "/views/random.html",
      //   includes html inside this directive
      transclude: true,
      //   replaces the current html tag to the outermost proper html tag based on the template
      replace: true,
      controller: function ($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      },
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
