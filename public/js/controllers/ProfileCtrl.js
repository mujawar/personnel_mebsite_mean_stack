/*
 angular.module('ProfileCtrl', []).controller('ProfileController', function($scope,$http) {

 $scope.tagline = 'The square root of life is pi!';

 $scope.submitData = function(){
 console.log('calling submitData');
 console.log('data' +JSON.stringify($scope.contact));
 $http.post('/personnelwebsite',$scope.contact).success(function(result){
 console.log('result' +JSON.stringify(result));
 $scope.contact = ''
 $scope.successMessage="Thanku for contacting me i will get back to you as earliest!"
 })
 }


 });*/

angular.module('ProfileCtrl', []).controller('ProfileController', function ($scope, $window) {
    console.log('initailazing profile');
    var window = angular.element($window);
    window.bind('scroll', function () {
        var scroll = window.scrollTop();
        if (scroll > 200 || scroll === undefined) {
            $scope.businessView = true;
        } else {
            $scope.businessView = false;
        }
        console.log('scroll-----', scroll);
        $scope.$apply();
    });

    window.bind('scroll', function () {
        var scroll = window.scrollTop();
        if (scroll > 1100 || scroll === undefined) {
            $scope.businessView1 = true;
        }
        /*else{
         $scope.businessView1 = false;
         }*/
        console.log('scroll-----', scroll);
        $scope.$apply();
    });

    window.bind('scroll', function () {
        var scroll = window.scrollTop();
        if (scroll > 1600 || scroll === undefined) {
            $scope.businessView2 = true;
        }
        /*else{
         $scope.businessView2 = false;
         }*/
        console.log('scroll-----', scroll);
        $scope.$apply();
    });

    window.bind('scroll', function () {
        var scroll = window.scrollTop();
        if (scroll > 1850 || scroll === undefined) {
            $scope.businessView3 = true;
        }
        /*else{
         $scope.businessView3 = false;
         }*/
        console.log('scroll-----', scroll);
        $scope.$apply();
    });

    window.bind('scroll', function () {
        var scroll = window.scrollTop();
        if (scroll > 2000 || scroll === undefined) {
            $scope.businessView4 = true;
        }
        /*else{
         $scope.businessView4 = false;
         }*/
        console.log('scroll-----', scroll);
        $scope.$apply();
    });

    window.bind('scroll', function () {
        var scroll = window.scrollTop();
        if (scroll > 2350 || scroll === undefined) {
            $scope.businessView5 = true;
        }
        /*else{
         $scope.businessView5 = false;
         }*/
        console.log('scroll-----', scroll);
        $scope.$apply();
    });

    window.bind('scroll', function () {
        var scroll = window.scrollTop();
        if (scroll > 2600 || scroll === undefined) {
            $scope.businessView6 = true;
        }
        /*else{
         $scope.businessView6 = false;
         }*/
        console.log('scroll-----', scroll);
        $scope.$apply();
    });


});