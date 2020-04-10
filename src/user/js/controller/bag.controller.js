module.exports = [
	'$location', 
	'$timeout', 
	'$scope',
	'$rootScope',
	'$controller',
	'$window',
	'$routeParams',
	'bagService',
function(location, timeout, s, rs, $controller, win, $routeParams, bagService) {

	if(!bagService.isEmpty()) {
		timeout(function() { win.scrollTo(0, 0);}, 1000);
		
		s.bagService = bagService;
		console.log(bagService);

		const init = () => {
			
		}

		s.onClickRemove = (id) => {
			bagService.remove(id);
		}

		s.onClickBack = () => {
			location.path('/product-detail');
		}

		s.onClickContinueShopping = () => {
			location.path('/product');
		}

		s.onClickPay = () => {
			if(!bagService.isEmpty()) {
				location.path('/delivery-address')
			}
		}

		init();
	} else {
		location.path('/product');
	}
}];
