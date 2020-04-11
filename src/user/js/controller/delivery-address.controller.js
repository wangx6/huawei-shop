module.exports = [
	'$location', 
	'$timeout', 
	'$scope',
	'$rootScope',
	'$controller',
	'$window',
	'$routeParams',
	'addressService',
function(location, timeout, s, rootScope, $controller, win, $routeParams, addressService) {
	timeout(function() { win.scrollTo(0, 0);}, 1000);

	s.addr = addressService;

	s.onClickBack = () => {
		location.path('/bag');
	}

	s.onClickContinue = () => {
		const rs = s.addr.validate();
		if( rs.ok ) {
			location.path('/checkout');
		}
	}
}];
