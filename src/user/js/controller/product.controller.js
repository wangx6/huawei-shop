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
	s.productService = productService;

	s.onClickItem = (item) => {
		location.path('/product-detail').search({id: item.id});
	}
}];
