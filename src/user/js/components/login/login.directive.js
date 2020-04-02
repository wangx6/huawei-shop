module.exports = [
	'$rootScope',
	'$location', 
	'$timeout', 
	'userService',
	'$window',
function(rs, location, timeout, userService, $window) {
	function link(s) {
		timeout(function() { $window.scrollTo(0, 0); });
		s.data = {user: '', password: ''};
		function init() {
			userService.tryToLoginFromLocal().then(function(res) {
				location.path('orders');
			});
		}

		s.onClickLogin = function() {
			rs.$broadcast('spinner.show');
			userService.login(s.data).then(function() {
				timeout(function() {
					rs.$broadcast('spinner.hide');
					location.path('orders');
				}, 800);
			}, function(reason) {
				rs.$broadcast('spinner.hide');
				rs.$broadcast('warning.show', 'try again');
			});
		}

		init();
	}

	return {
		link: link,
		restricted: 'E',
		templateUrl: './js/components/login/login.template.html'
	};

}];