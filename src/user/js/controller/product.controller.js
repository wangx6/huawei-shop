module.exports = [
	'$location', 
	'$timeout', 
	'$scope',
	'$rootScope',
	'$controller',
	'$window',
	'productService',
	'bagService',
function(location, timeout, s, rs, $controller, win, productService, bagService) {
	// timeout(function() { win.scrollTo(0, 0);}, 10);
	s.productService = productService;

	s.onClickItem = (item) => {
		location.path('/product-detail').search({id: item.id});
	}
}];
