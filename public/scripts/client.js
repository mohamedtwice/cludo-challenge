var myApp = angular.module('myApp', ['ngRoute']);


// website.com/#!/#search

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: "views/partials/home.html",
    controller: "SectionController"
  });
});

myApp.controller('SectionController', SectionController);

function SectionController($location) {
  var vm = this;


}
