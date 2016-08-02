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
