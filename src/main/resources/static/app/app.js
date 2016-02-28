//angular.module('myApp',[] );

(function(angular) {
  //angular.module("myApp.controllers", ['angular-flexslider']);
  angular.module("myApp.controllers", []);
  angular.module("myApp.services", []);
  angular.module("myApp", ["ngResource", "myApp.controllers", "myApp.services"]);

}(angular));