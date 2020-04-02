module.exports = [
	'$location', 
	'$timeout', 
	'$scope',
	'$rootScope',
	'$controller',
	'$window',
	'productService',
function(location, timeout, s, rs, $controller, win, productService) {
	timeout(function() { win.scrollTo(0, 0);}, 1000);
	console.log(productService.getProducts());
	s.productService = productService;

	s.onClickItem = (item) => {
		console.log(item);
	}


}];
