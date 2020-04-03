(function() {
	'use strict';

	//---------------------------------------------------------
	// -- dev dependencies
	//---------------------------------------------------------
	const angular = require('angular');
	const jQuery = require('jQuery');
	// const moment = require('moment');

	//---------------------------------------------------------
	// -- app dependencies
	//---------------------------------------------------------
	const util = require('./service/util.service');
	//---------------------------------------------------------
	// -- app model
	//-------------	--------------------------------------------
	const ProductModel = require('./model/product.model');
	const BagModel = require('./model/bag.model');
	
	//---------------------------------------------------------
	// -- DIRECTIVES
	//---------------------------------------------------------
	const footer = require('./components/footer/footer.directive');

	//---------------------------------------------------------
	// -- CONTROLLER
	//---------------------------------------------------------
	const productController = require('./controller/product.controller');
	const productDetailController = require('./controller/product-detail.controller');
	const bagController = require('./controller/bag.controller');
	const checkoutController = require('./controller/checkout.controller');
	
	//---------------------------------------------------------
	// -- TEMPLATE
	//---------------------------------------------------------
	const productTemplate = require('../../../user/product.html');
	// const deliveryDetailsTemplate = require('../../../user/delivery-details.html');

	const footerTemplate = require('../../../user/js/components/footer/footer.template.html');
	// const addOrdersTemplate = require('../../../user/js/components/add-orders/add-orders.template.html');
	// const spendingGraphTemplate = require('../../../user/js/components/spending-graph/spending-graph.template.html');
	// const shopSearchResultsTemplate = require('../../../user/js/components/shops/shops.template.html');

	//---------------------------------------------------------
	// -- app dependencies
	//---------------------------------------------------------
	const app = angular.module('huawei-shop', [ require('angular-route'), require('angular-animate')]);
	app.run(['$templateCache','$location', function($templateCache, us, location) {
		// $templateCache.put('products.php', productsTemplate);
		// $templateCache.put('cart.html', cartTemplate);
		// $templateCache.put('checkout.php', checkoutTemplate);
		// $templateCache.put('review.html', reviewTemplate);
		// $templateCache.put('main.html', mainTemplate);

		//preload directive template
		$templateCache.put('./js/components/footer/footer.template.html', footerTemplate);
		// $templateCache.put('./js/components/spending-graph/spending-graph.template.html', spendingGraphTemplate);
		// $templateCache.put('./js/components/add-orders/add-orders.template.html', addOrdersTemplate);
		// $templateCache.put('./js/components/shops/shops.template.html', shopSearchResultsTemplate);
	}]);

	//---------------------------------------------------------
	//-- constants
	//---------------------------------------------------------
	app.constant('jQuery', jQuery);
	app.constant('token', document.getElementById('rr-session-token').value);

	//---------------------------------------------------------
	//-- directives
	//---------------------------------------------------------
	app.factory('ProductModel', ProductModel);
	app.factory('BagModel', BagModel);

	//---------------------------------------------------------
	//-- services
	//---------------------------------------------------------
	app.service('productService', ['ProductModel', function(ProductModel) { return ProductModel(); }]);
	app.service('bagService', ['BagModel', function(BagModel) { return BagModel(); }]);

	//---------------------------------------------------------
	//-- controllers
	//---------------------------------------------------------
	app.controller('productController', productController);
	app.controller('productDetailController', productDetailController);
	app.controller('bagController', bagController);
	app.controller('checkoutController', checkoutController);
	

	/**
	 * 
	 * @param
	 * @return
	 */
	app.directive('hwFooter', footer);

	//---------------------------------------------------------
	//-- router configuration
	//---------------------------------------------------------
	app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	    $routeProvider
	    	.when('/', {templateUrl : 'product.html'})
	    	.when('/product', {templateUrl : 'product.html', controller: 'productController'})
	    	.when('/product-detail', {templateUrl : 'product-detail.html', controller:'productDetailController'})
	    	.when('/bag', {templateUrl : 'bag.html', controller: 'bagController'})
	    	.when('/checkout', {templateUrl : 'checkout.html', controller: 'checkoutController'})
	    }
	]);
})();
