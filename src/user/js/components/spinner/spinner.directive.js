module.exports = ['$rootScope', '$timeout', function(rs, timeout) {
	var link = function(s, e, a) {
		var sub0 = rs.$on('spinner.show', onSpinnerShow);
		var sub1 = rs.$on('spinner.hide', onSpinnerHide);

		s.isVisible = false;

		function onSpinnerShow() {
			s.isVisible = true;
			timeout(function() {
				if(s.isVisible) {
					onSpinnerHide();
					rs.$broadcast('warning.show', 'Process timeout');
				}
			}, 10000);
		}

		function onSpinnerHide() {
			s.isVisible = false;
		}

		s.$on('$destroy', function() {
			sub0();
			sub1();
		})
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/spinner/spinner.template.html'
	};
}];