angular.module('app.controllers', [])

.controller('signupCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope, $cordovaInAppBrowser) {
	   $scope.facebookLogin = function(){
           $cordovaInAppBrowser.open('http://localhost:9000/auth/facebook', '_system')
           .then(function(event){
               console.log(event);
           })
           .catch(function(event){
               
           })
       } 
})
  
.controller('browseFlicksCtrl', function($scope) {

})
   
.controller('matchesCtrl', function($scope) {

})
   
.controller('profileCtrl', function($scope) {

})
   
.controller('settingsCtrl', function($scope) {

})


    