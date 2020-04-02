module.exports = [
	'$rootScope',
	'$location',
	'jQuery',
	'$window',
	'$timeout',
	'ordersService',
	'userService',
	'$q',
	function(rs, location, $, $window, timeout, ordersService, userService, $q) {
	
	var link = function(s, e, a) {
		if(!userService.getIsLoaded()) {
			location.path('/');
			return;
		}

		function init() {}
		init();
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/invoice/invoice.template.html'
	};
}];