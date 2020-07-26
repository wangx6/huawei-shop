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

	s.showProducts = false;
	s.showRevertHeader = false;
	s.showHeader = true;
	s.onMouseover = function() {
		s.showProducts = true;
		s.showRevertHeader = true;
		s.showHeader = false;
	}

	s.onMouseLeaveProducts = function() {
		s.showProducts = false;
		s.showRevertHeader = false;
		s.showHeader = true;
	};

	s.onClickItem = (item) => {
		location.path('/product-detail').search({id: item.id});
	}
}];
