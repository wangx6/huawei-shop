module.exports = [
	'$rootScope',
	'$location',
	'$window',
	'$timeout',
	'bagService',
	function(rs, location, $window, timeout, bagService ) {
	
	var link = function(s, e, a) {

		s.bagService = bagService;
		
		s.onClickShop = () => {
			location.path('/product').search({});
		}

		s.onClickBag = () => {
			if(!bagService.isEmpty()) {
				location.path('/bag');
			}
		}
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/footer/footer.template.html'
	};
}];