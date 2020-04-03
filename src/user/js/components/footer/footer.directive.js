module.exports = [
	'$rootScope',
	'$location',
	'jQuery',
	'$window',
	'$timeout',
	function(rs, location, $, $window, timeout ) {
	
	var link = function(s, e, a) {
		
		s.onClickShop = () => {
			location.path('/product').search({});
		}

		s.onClickBag = () => {
			location.path('/bag');
		}
		
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/footer/footer.template.html'
	};
}];