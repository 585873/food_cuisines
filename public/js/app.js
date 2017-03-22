angular
  .module("foodcuisines", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("FoodFactory", [
    "$resource",
    FoodFactoryFunction
  ])
  .controller("IndexController", [
    "FoodFactory",
    "$state",
    IndexControllerFunction
  ])
  .controller("ShowController", [
    "FoodFactory",
    "$stateParams",
    "$state",
    ShowControllerFunction
  ])
  function Router($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "/assets/js/ng-views/welcome.html"
    })
    .state("index", {
      url: "/foods",
      templateUrl: "/assets/js/ng-views/index.html",
      controller: "IndexController",
      controllerAs: "vm"
    })
    .state("show", {
      url: "/foods/:cuisine",
      templateUrl: "/assets/js/ng-views/show.html",
      controller: "ShowController",
      controllerAs: "vm"
    })
  }
  function FoodFactoryFunction($resource){
    return $resource("/api/foods/:cuisine", {}, {
      update: { method: "PUT" }
    })
  }
  function IndexControllerFunction(FoodFactory, $state){
    this.foods = FoodFactory.query()
    this.newFood = new FoodFactory()
    this.create = function(){
      this.newFood.$save().then(function(food){
        $state.go("show", { name: food.cuisine })
      })
    }
  }
  function ShowControllerFunction(FoodFactory, $stateParams, $state){
    this.food = FoodFactory.get({ cuisine: $stateParams.cuisine })
    this.update = function(){
      console.log("Updating");
      this.food.$update({ cuisine: $stateParams.cuisine })
      }
    this.destroy = function(){
      this.food.$delete({ cuisine: $stateParams.cuisine }).then(function(){
        $state.go("index")
      })
    }
  }
