'use strict';

/**
 * @ngdoc function
 * @name ecommerceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ecommerceApp
 */
angular.module('ecommerceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
