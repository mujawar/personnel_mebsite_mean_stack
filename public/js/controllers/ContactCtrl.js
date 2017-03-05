/**
 * Created by arif on 31/7/16.
 */
angular.module('ContactCtrl', []).controller('ContactController', function ($scope, $http) {
    console.log('initailazing contact');

    $scope.tagline = 'The square root of life is pi!';

    $scope.submitData = function () {
        console.log('calling submitData');
        console.log('data' + JSON.stringify($scope.contact));
        $http.post('/personnelwebsite', $scope.contact).success(function (result) {
            console.log('result' + JSON.stringify(result));
            $scope.successMessage = "Thanku for contacting me i will get back to you as earliest!"

            var mailOptions = {
                to: 'arifmr91@gmail.com',
                subject: 'Email from my personnel website',
                data: $scope.contact
            };
            console.log('mailOptions' + JSON.stringify(mailOptions));
            /* $http.post('/sendFeedbackMail',mailOptions).success(function(result) {
             console.log('result' + JSON.stringify(result));
             })
             */
            $scope.contact = ''


        })
    }

});