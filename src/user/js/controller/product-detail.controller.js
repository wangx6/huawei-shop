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

	let id = '';

	s.data = null;
	s.productService = productService;

	const init = () => {
		id = $routeParams.id;
		s.data = Object.assign({}, productService.findById(id));
	}

	s.onClickBack = () => {
		location.path('/product').search({});
	}

	s.onClickColorItem = (color) => {
		location.path('/bag').search({color: color.color});
	}

	init();


}];
