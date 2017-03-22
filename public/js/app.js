angular
  .module("foodcuisines", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("Food", [
    "$resource",
    FoodFactoryFunction
  ])
  .controller("indexCtrl", [
    "Food",
    indexController
  ])
  .controller("showCtrl", [
    "$stateParams",
    "Food",
    showController
  ])


  function Router ($stateProvider) {
    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "/assets/js/ng-views/welcome.html"
      })
      .state("index", {
        url: "/foods",
        templateUrl: "/assets/js/ng-views/index.html",
        controller: "indexCtrl",
        controllerAs: "vm"
      })
      .state("show", {
        url: "/foods/:name",
        templateUrl: "/assets/js/ng-views/show.html",
        controller: "showCtrl",
        controllerAs: "vm"
      })
  }

  function FoodFactoryFunction ($resource) {
    return $resource("/api/foods/:name", {}, {
      update: { method: "PUT" }
    });
  }

  function indexController (Food) {
    this.foods = Food.query()
  }

  function showController ($stateParams, Food) {
    this.food = Food.get({name: $stateParams.name})
  }
