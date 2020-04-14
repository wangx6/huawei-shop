module.exports = ['$rootScope', '$location', function(rs, location) {
	var link = function(s, e, a) {
		rs.$on('payment-success.show', onShow);
		rs.$on('payment-success.hide', onHide);

		function init() {
			onHide();
		}

		function onShow() {
			e.css({
				display: 'block'
			});
		}

		function onHide() {
			e.css({
				display: 'none'
			});
		}

		s.onClickKeepShopping = function() {
			onHide();
			location.path('/product').search({home: true});
		}

		init();
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/payment-success/payment-success.template.html'
	};
}];