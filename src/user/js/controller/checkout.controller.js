module.exports = [
	'$location', 
	'$timeout', 
	'$scope',
	'$rootScope',
	'$controller',
	'$window',
	'productService',
	'$routeParams',
	'purchaseService',
function(location, timeout, s, rs, $controller, win, productService, $routeParams, purchaseService) {
	timeout(function() { win.scrollTo(0, 0);}, 1000);

	console.log(purchaseService);

	s.productService = productService;
	s.data = Object.assign({}, purchaseService.getData());
	console.log(s.data);

	s.onClickBack = () => {
		location.path('/product-detail');
	}

	s.onClickPay = () => {
		console.log(s.data);
		purchaseService.setData(Object.assign({}, s.data));
		purchaseService.pay();
	}

}];
