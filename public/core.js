/**
 * Created by zsx11 on 2016/9/28.
 */
var scotchTodo = angular.module('scotchTodo', []);
scotchTodo.controller('mainController',['$scope','$q','$http',
    function($scope,$q,$http){
        $scope.formData = {};
        $http({
            method : "get",
            url    : "/api/todos"
        }).then(function(data){
            $scope.todos = data;
        },function(resp){
            console.log('Error: ' + resp);
        });

        $scope.createTodo = function() {
            $http({
                method : "post",
                url    : "/api/todos",
                data   : $scope.formData
            }).then(function(data){
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            },function(resp){
                console.log('Error: ' + resp);
            });
        };

        $scope.deleteTodo = function(id) {
            $http({
                method : "delete",
                url    : "/api/todos"+id
            }).then(function(data){
                $scope.todos = data;
            },function(resp){
                console.log('Error: ' + resp);
            });

        };
    }
]);

    //
    //
    //var defer = $q.defer();
    //$http({
    //    method: 'POST',
    //    url: urlUtils.getPath("/claim/batchTransfer/transferTask"),
    //    data: transParam
    //}).success(function (data) {
    //    defer.resolve(data);
    //});


//function mainController($scope, $http) {
//    $scope.formData = {};
//
//    // when landing on the page, get all todos and show them
//    $http.get('/api/todos')
//        .success(function(data) {
//            $scope.todos = data;
//        })
//        .error(function(data) {
//            console.log('Error: ' + data);
//        });
//
//    // when submitting the add form, send the text to the node API
//    $scope.createTodo = function() {
//        $http.post('/api/todos', $scope.formData)
//            .success(function(data) {
//                $scope.formData = {};
//                $scope.todos = data;
//                console.log(data);
//            })
//            .error(function(data) {
//                console.log('Error: ' + data);
//            });
//    };
//
//    // delete a todo after checking it
//    $scope.deleteTodo = function(id) {
//        $http.delete('/api/todos/' + id)
//            .success(function(data) {
//                $scope.todos = data;
//            })
//            .error(function(data) {
//                console.log('Error: ' + data);
//            });
//    };
//
//}