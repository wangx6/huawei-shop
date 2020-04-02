module.exports = ['$rootScope', 'jQuery', function(rs, $) {
	var link = function(s, e, a) {
		var sub0 = rs.$on('warning.show', onWarningShow);
		var sub1 = rs.$on('warning.hide', onWarningHide);

		var messageEle = null;
		var promise;

		function init() {
			messageEle = $(e).find('.yh-warning-message');
			onWarningHide();
			// onWarningShow('asdf');
		}

		function onWarningShow(scope, message, prm) {
			promise = prm;
			e.css({ display: 'block' });
			messageEle.html(message || 'Oops, something went wrong.');
		}

		function onWarningHide() {
			e.css({ display: 'none' });
			messageEle.html('');
		}

		s.onClickClose = function() {
			onWarningHide();
			if(promise) {
				promise.resolve();
			}
		};

		s.$on('$destroy', function() {
			sub0();
			sub1();
		});

		init();
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/warning/warning.template.html'
	};
}];