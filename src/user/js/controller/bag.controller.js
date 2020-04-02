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

	let id = null;
	let color = null;
	s.bag = [];

	const init = () => {
		id = $routeParams.id;
		pcolor = $routeParams.color;
		let { colorOptions, ...rest } = productService.findById(id)
		s.bag.push(Object.assign({}, {color: pcolor, ...rest}));
	}

	s.onClickBack = () => {
		location.path('/product-detail');
	}

	s.onClickPay = () => {
		console.log('pay now....');
	}

	init();

}];
