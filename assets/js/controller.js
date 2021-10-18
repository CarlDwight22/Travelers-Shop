angular.module('myApp', ['ngAnimate']);

angular.module('myApp')
.controller('myController', function ($scope, $sce) {
  empSelected:Number;
  
  $scope.inventory = [
    { id :  1, category : "Water Bottle",     description : "small water bottle",   img : $sce.trustAsResourceUrl("assets/img/team/small bottle.jpg"),      price :  50.50, qty : 1 },
    { id :  2, category : "Water Bottle",     description : "large water bottle",   img : $sce.trustAsResourceUrl("assets/img/team/large bottle.jpg"),      price :  90.99, qty : 1, onSale : true },
    { id :  3, category : "Flashlight",       description : "small flashlight",     img : $sce.trustAsResourceUrl("assets/img/team/flashlight_small.jpg"),  price :  50.00, qty : 1 },
    { id :  4, category : "Flashlight",       description : "big flashlight",       img : $sce.trustAsResourceUrl("assets/img/team/large flashlight.jpg"),  price : 100.99, qty : 1 },
    { id :  5, category : "Stove",            description : "small stove",          img : $sce.trustAsResourceUrl("assets/img/team/stove small.jpg"),       price : 200.99, qty : 1 },
    { id :  6, category : "Stove",            description : "big stove",            img : $sce.trustAsResourceUrl("assets/img/team/stove large.jpg"),       price : 500.25, qty : 1 },
    { id :  7, category : "Sleeping Bag",     description : "simple sleeping bag",  img : $sce.trustAsResourceUrl("assets/img/team/sleepingbag simple.jpg"),price : 250.00, qty : 1 },
    { id :  8, category : "Sleeping Bag",     description : "deluxe sleeping bag",  img : $sce.trustAsResourceUrl("assets/img/team/sleepingbag dulex.jpg"), price : 500.00, qty : 1 },
    { id :  9, category : "Tent",             description : "1-person tent",        img : $sce.trustAsResourceUrl("assets/img/team/tent 1.jpg"),            price : 800.00, qty : 1 },
    { id : 10, category : "Tent",             description : "2-person tent",        img : $sce.trustAsResourceUrl("assets/img/team/tent 2.jpg"),            price :1000.00, qty : 1 },
    { id : 11, category : "Tent",             description : "3-person tent",        img : $sce.trustAsResourceUrl("assets/img/team/tent 3.jpg"),            price :1499.00, qty : 1 },
    { id : 12, category : "Tent",             description : "4-person tent",        img : $sce.trustAsResourceUrl("assets/img/team/tent 4.jpg"),            price :1800.00, qty : 1 },
    { id : 13, category : "Knife",            description : "sharp campingknife",   img : $sce.trustAsResourceUrl("assets/img/team/knife.jpg"),             price : 150.00, qty : 1, onSale : true },
    { id : 14, category : "Axe",              description : "handable axe",         img : $sce.trustAsResourceUrl("assets/img/team/axes.jpg"),              price : 200.00, qty : 1 },
    { id : 15, category : "First Aid Kit",    description : "full package kit",     img : $sce.trustAsResourceUrl("assets/img/team/first aid kit.jpg"),     price : 250.00, qty : 1 },
    { id : 16, category : "Foldable Chair",   description : "small chair",          img : $sce.trustAsResourceUrl("assets/img/team/chair.jpg"),             price : 300.50, qty : 1 },
    { id : 17, category : "Eating Utensils",  description : "full pack utensils",   img : $sce.trustAsResourceUrl("assets/img/team/utensils.jpg"),          price : 250.99, qty : 1 },
    { id : 18, category : "Lighter",          description : "lighter",              img : $sce.trustAsResourceUrl("assets/img/team/lighter.jpg"),           price :  49.99, qty : 1 },
    { id : 19, category : "Matches",          description : "waterprof matches",    img : $sce.trustAsResourceUrl("assets/img/team/matches.jpg"),           price :   5.99, qty : 1 },
    { id : 20, category : "Fire Strater",     description : "fire starter kit",     img : $sce.trustAsResourceUrl("assets/img/team/fire starter.jpg"),      price : 119.99, qty : 1 },
    { id : 21, category : "Rope",             description : "10-meter rope",        img : $sce.trustAsResourceUrl("assets/img/team/rope 10.jpg"),           price : 150.00, qty : 1 },
    { id : 22, category : "Rope",             description : "20-meter rope",        img : $sce.trustAsResourceUrl("assets/img/team/rope 20.jpg"),           price : 200.00, qty : 1 },
    { id : 23, category : "Rope",             description : "30-meter rope",        img : $sce.trustAsResourceUrl("assets/img/team/rope 30.jpg"),           price : 300.00, qty : 1 },
    { id : 24, category : "Trash Bag",        description : "small trashbag",       img : $sce.trustAsResourceUrl("assets/img/team/trash bag.jpg"),         price : 150.00, qty : 1 },
    { id : 25, category : "Headlamp",         description : "battery headlamp",     img : $sce.trustAsResourceUrl("assets/img/team/headlamp.jpg"),          price : 240.00, qty : 1 },
    { id : 26, category : "Machete",          description : "big machete",          img : $sce.trustAsResourceUrl("assets/img/team/machete.jpg"),           price : 350.00, qty : 1 },
    { id : 27, category : "Map",              description : "maps",                 img : $sce.trustAsResourceUrl("assets/img/team/map.jpg"),  price : 150.00, qty : 1 },
    { id : 28, category : "Traps",            description : "traps kit",            img : $sce.trustAsResourceUrl("assets/img/team/trap.jpg"),              price : 200.00, qty : 1 },
    { id : 29, category : "Shovel",           description : "small shovel",         img : $sce.trustAsResourceUrl("assets/img/team/shovel small.jpg"),      price : 119.25, qty : 1 },
    { id : 30, category : "Shovel",           description : "large shovel",         img : $sce.trustAsResourceUrl("assets/img/team/shovel large.jpg"),      price : 259.25, qty : 1 },
    { id : 31, category : "Hammer",           description : "normal hammer",        img : $sce.trustAsResourceUrl("assets/img/team/hammer.jpg"),            price : 149.00, qty : 1 }
  ];

  $scope.empSelected=5;
  
  $scope.cart = [];
  
  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };
  
  $scope.getCost = function(item) {
    return item.qty * item.price;
  };

  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.id);
    if (found) {
      found.qty += itemToAdd.qty;
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));}
  };
  
  $scope.getTotal = function() {
    var total =  _.reduce($scope.cart, function(sum, item) {
      return sum + $scope.getCost(item);
    }, 0);
    console.log('total: ' + total);
    return total;
  };
  
  $scope.clearCart = function() {
    $scope.cart.length = 0;
  };
  
  $scope.removeItem = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };
  
});
 