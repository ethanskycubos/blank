var app = angular.module('UsersProfiles', []);

app.controller('APICtrl', function($scope , $http, $filter) {
  var url = window.location.href + '/api';
  $http.get(url).then(function (response) { 
    console.log(response.data);
    $scope.users = response.data.data;
  });

  $scope.showUserData = function(user_id) {
    $scope.user_profile = $filter('filter')($scope.users, function (d) {return d.id === user_id;})[0];
  };

  $scope.usersProfile = function(){
	console.log($scope.user_profile);
  };

  $scope.edit = function(){
	console.log('edit');
  };

  $scope.create = function(){
  	console.log('create');
  };

});