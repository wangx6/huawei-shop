(function() {
	'use strict';

	//---------------------------------------------------------
	// -- dev dependencies
	//---------------------------------------------------------
	const angular = require('angular');

	//---------------------------------------------------------
	// -- app dependencies
	//---------------------------------------------------------
	const util = require('./service/util.service');
	const validator = require('./service/validator.service');
	//---------------------------------------------------------
	// -- app model
	//-------------	--------------------------------------------
	const ProductModel = require('./model/product.model');
	const BagModel = require('./model/bag.model');
	const PurchaseModel = require('./model/purchase.model');
	const AddressModel = require('./model/address.model');
	const CheckoutFormModel = require('./model/checkout-form.model');
	
	//---------------------------------------------------------
	// -- DIRECTIVES
	//---------------------------------------------------------
	const footer = require('./components/footer/footer.directive');
	const spinner = require('./components/spinner/spinner.directive');
	const paymentSuccess = require('./components/payment-success/payment-success.directive');
	const numOnlyInput = require('./components/num-only-input/num-only-input.directive');

	//---------------------------------------------------------
	// -- CONTROLLER
	//---------------------------------------------------------
	const productController = require('./controller/product.controller');
	const productDetailController = require('./controller/product-detail.controller');
	const bagController = require('./controller/bag.controller');
	const checkoutController = require('./controller/checkout.controller');
	const deliveryAddressController = require('./controller/delivery-address.controller');
	
	//---------------------------------------------------------
	// -- TEMPLATE
	//---------------------------------------------------------
	const productTemplate = require('../../../user/product.html');
	const footerTemplate = require('../../../user/js/components/footer/footer.template.html');

	//---------------------------------------------------------
	// -- app dependencies
	//---------------------------------------------------------
	const app = angular.module('huawei-shop', [ require('angular-route'), require('angular-animate')]);
	app.run(['$templateCache','$location', function($templateCache, us, location) {
		// $templateCache.put('products.php', productsTemplate);
		//preload directive template
		$templateCache.put('./js/components/footer/footer.template.html', footerTemplate);
	}]);

	//---------------------------------------------------------
	//-- constants
	//---------------------------------------------------------
	app.constant('token', document.getElementById('rr-session-token').value);

	//---------------------------------------------------------
	//-- directives
	//---------------------------------------------------------
	app.factory('ProductModel', ProductModel);
	app.factory('BagModel', BagModel);
	app.factory('PurchaseModel', PurchaseModel);
	app.factory('AddressModel', AddressModel);
	app.factory('CheckoutFormModel', CheckoutFormModel);

	//---------------------------------------------------------
	//-- services
	//---------------------------------------------------------
	app.service('productService', ['ProductModel', function(ProductModel) { return ProductModel(); }]);
	app.service('bagService', ['BagModel', function(BagModel) { return BagModel(); }]);
	app.service('purchaseService', ['PurchaseModel', function(PurchaseModel) { return PurchaseModel(); }]);
	app.service('addressService', ['AddressModel', function(AddressModel) { return AddressModel(); }]);
	app.service('checkoutFormService', ['CheckoutFormModel', function(CheckoutFormModel) { return CheckoutFormModel(); }]);
	app.service('validatorService', validator);

	//---------------------------------------------------------
	//-- controllers
	//---------------------------------------------------------
	app.controller('productController', productController);
	app.controller('productDetailController', productDetailController);
	app.controller('bagController', bagController);
	app.controller('checkoutController', checkoutController);
	app.controller('deliveryAddressController', deliveryAddressController);

	/**
	 * 
	 * @param
	 * @return
	 */
	app.directive('hwFooter', footer);
	app.directive('hwSpinner', spinner);
	app.directive('hwNumOnlyInput', numOnlyInput);
	app.directive('hwPaymentSuccess', paymentSuccess);

	//---------------------------------------------------------
	//-- router configuration
	//---------------------------------------------------------
	app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	    $routeProvider
	    	.when('/', {templateUrl : 'product.html', controller: 'productController'})
	    	.when('/product', {templateUrl : 'product.html', controller: 'productController'})
	    	.when('/product-detail', {templateUrl : 'product-detail.html', controller:'productDetailController'})
	    	.when('/bag', {templateUrl : 'bag.html', controller: 'bagController'})
	    	.when('/checkout', {templateUrl : 'checkout.html', controller: 'checkoutController'})
	    	.when('/delivery-address', {templateUrl : 'delivery-address.html', controller: 'deliveryAddressController'})
	    }
	]);
})();
