var myApp = angular.module("appTroveTrek",[]);

myApp.controller('RegisterCtrl',function($scope){
    $scope.user = [];
    $scope.RegisterSubmit = function(){
        alert("Completed");
    };
});


/////////////////////////////////////////////////////////
function registereForm_validate() {
    if ($("#RegisterForm").hasClass("ng-invalid")) {
        alert("Please correct the form inputs !!!");
        return false;
    }
    return true;
}