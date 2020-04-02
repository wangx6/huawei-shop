module.exports = ['$rootScope', 'jQuery', function(rs, $) {
	var link = function(s, e, a) {
		var sub0 = rs.$on('comfirmation.show', oncomfirmationShow);
		var sub1 = rs.$on('comfirmation.hide', oncomfirmationHide);

		var messageEle = null;
		var promise;

		function init() {
			messageEle = $(e).find('.yh-comfirmation-message');
			oncomfirmationHide();
		}

		function oncomfirmationShow(scope, message, prm) {
			console.log(prm);
			promise = prm;
			e.css({ display: 'block' });
			messageEle.html(message || 'Are you sure?');
		}

		function oncomfirmationHide() {
			e.css({ display: 'none' });
			messageEle.html('');
		}

		s.onClickYes = function() {
			oncomfirmationHide();
			if(promise) {
				promise.resolve();
				promise = null;
			}
		};

		s.onClickCancle = function() {
			oncomfirmationHide();
			if(promise) {
				promise.reject();
				promise = null;
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
		templateUrl: './js/components/comfirmation/comfirmation.template.html'
	};
}];