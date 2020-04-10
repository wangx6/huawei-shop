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
	'bagService',
function(location, timeout, s, rootScope, $controller, win, productService, $routeParams, purchaseService, bagService) {
	// move page to top
	timeout(function() { win.scrollTo(0, 0);}, 1000);

	// binding
	s.productService = productService;
	s.data = Object.assign({}, purchaseService.getData());

	// events
	s.onClickBack = () => {
		location.path('/delivery-address');
	}

	s.onClickPay = () => {
		rootScope.$broadcast('spinner.show');
		timeout(() => {
			rootScope.$broadcast('spinner.hide');
			console.log(s.data);
			purchaseService.pay();
			console.log('payment complete');
			bagService.reset();
			console.log(bagService.getData());
			location.path('/product');
		}, 2000);
	}
}];
