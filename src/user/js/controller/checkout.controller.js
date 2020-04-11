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
function(location, timeout, s, rootScope, 
	$controller, win, productService, $routeParams, 
	purchaseService, bagService, addressService) {
	if(bagService.isEmpty()) location.path('/product').search({});
	// move page to top
	timeout(function() { win.scrollTo(0, 0);}, 1000);

	s.addressService = addressService;

	s.data = {
		cardName: '',
		cardNum: '',
		expiryDate: { month: '', year: '' },
		cvc: '',
	};

	// events
	s.onClickBack = () => {
		location.path('/delivery-address');
	}

	s.onClickEditAddress = () => {
		location.path('/delivery-address');
	}

	s.onClickPay = () => {
		// if(bagService.isEmpty()) return;
		rootScope.$broadcast('spinner.show');
		timeout(() => {
			rootScope.$broadcast('spinner.hide');
			purchaseService.pay();
			console.log('payment complete');
			bagService.reset();
			console.log(bagService.getData());
			location.path('/product');
		}, 2000);
	}
}];
