var app = angular.module('myApp', ['ngRoute', 'ngTasty']);

app.controller('APICtrl', function($scope , $http) {

  $scope.init = {
    'count': 5,
    'page': 1,
    'sortBy': 'name',
    'sortOrder': 'desc'
  };

  $scope.reloadCallback = function () {};

  $scope.filterBy = {
    'name': '',
    'sf-location': ''
  };

  $scope.search = function () {
    $scope.reloadCallback();
  };

  $scope.getResource = function (params, paramsObj) {
    console.log(params);

    var urlApi = 'users_profiles/api?' + params;
    return $http.get(urlApi).then(function (response) {
      console.log(response);
      return {
        'rows': response.data.rows,
        'header': response.data.header,
        'pagination': response.data.pagination,
        'sortBy': response.data.sort_by,
        'sortOrder': response.data.sort_order
        // 'current_page': response.data['current_page'],
        // //'data': response.data['data'],
        // 'from': response.data['from'],
        // 'last_page': response.data['last_page'],
        // 'next_page_url': response.data['next_page_url'],
        // 'per_page': response.data['per_page'],
        // 'prev_page_url': response.data['prev_page_url'],
        // 'to': response.data['to'],
        // 'total': response.data['total'],
      }
    });
  }
});