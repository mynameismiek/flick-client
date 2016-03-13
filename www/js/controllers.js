angular.module('app.controllers', [])

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {
	$scope.facebookLogin = function(){
		var fbLogin = window.open('http://localhost:9000/auth/facebook', '_blank');
		fbLogin.addEventListener('loadstop', function(){
			fbLogin.executeScript({code:'JSON.parse(document.body.innerText)'},function(res){
				$scope.token = res[0].token;
				$scope.$apply();		
				fbLogin.close();
			});
		}); 
	};
})

.controller('browseFlicksCtrl', function($scope) {

})

.controller('matchesCtrl', function($scope) {

})

.controller('profileCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})


