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
	if(bagService.isEmpty()) location.path('/product').search({});
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
		// if no item in the bag, do nothing
		if(bagService.isEmpty()) return;

		// if validate is ok, checkout
		if(checkoutFormService.validate().ok) {
			rootScope.$broadcast('spinner.show');
			timeout(() => {
				rootScope.$broadcast('spinner.hide');
				purchaseService.pay();
				bagService.reset();
				rootScope.$broadcast('payment-success.show')
			}, 2000);
		}
	}
}];
