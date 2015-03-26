/**
 * Created by SHERRI on 3/26/15.
 */
var app = angular.module('nameApp', []);
app.controller('NameCtrl', function ($scope){
    $scope.names = ["Sherri", "Rhiannon", "Susie" ];

    $scope.addName = function (){
        $scope.names.push($scope.enteredName);
        $scope.enteredName ='';
    };

});
