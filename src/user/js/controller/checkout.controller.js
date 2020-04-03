module.exports = [
	'$location', 
	'$timeout', 
	'$scope',
	'$rootScope',
	'$controller',
	'$window',
	'productService',
	'$routeParams',
function(location, timeout, s, rs, $controller, win, productService, $routeParams) {
	timeout(function() { win.scrollTo(0, 0);}, 1000);
	
	s.productService = productService;


	s.onClickBack = () => {
		location.path('/product-detail');
	}

	s.onClickPay = () => {
		console.log('pay now....');
	}


}];
