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
	'addressService',
	'validatorService',
	'checkoutFormService',
function(location, timeout, s, rootScope, 
	$controller, win, productService, $routeParams, 
	purchaseService, bagService, addressService, validatorService, checkoutFormService) {
	// if(bagService.isEmpty()) location.path('/product').search({});
	// move page to top
	timeout(function() { win.scrollTo(0, 0);}, 1000);

	s.addressService = addressService;
	s.data = checkoutFormService.data;


	// events
	s.onClickBack = () => {
		location.path('/delivery-address');
	}

	/**
	 * 
	 */
	s.onClickEditAddress = () => {
		location.path('/delivery-address');
	}

	/**
	 * 
	 */
	s.onClickPay = () => {
		const rs = checkoutFormService.validate();
		console.log(s.data);
		console.log(rs);
		// if(bagService.isEmpty()) return;
		// rootScope.$broadcast('spinner.show');
		// timeout(() => {
		// 	rootScope.$broadcast('spinner.hide');
		// 	purchaseService.pay();
		// 	bagService.reset();
		// 	location.path('/product');
		// }, 2000);
	}
}];
