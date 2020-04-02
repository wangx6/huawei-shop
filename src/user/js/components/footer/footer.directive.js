module.exports = [
	'$rootScope',
	'$location',
	'UserService',
	'jQuery',
	'$window',
	'$timeout',
	function(rs, location, UserService, $, $window, timeout) {
	var link = function(s, e, a) {
		s.showUp = false;
		s.UserService = UserService;

		function init() {
			initEvent();
			initActiveTab();
		}

		function initActiveTab() {
			// location.
		}

		function onWindowScroll(e) {
			var top = $(this).scrollTop();
			s.showUp = top > 400;
			s.$apply();
		}

		function initEvent() {
			$(window).scroll(onWindowScroll);
		}

		s.onClickHome = function() {
			console.log('home');
			rs.$broadcast('footer.activate.item', 'home');
		}

		s.onClickOrderHistory = function() {
			console.log('order history');
			rs.$broadcast('footer.activate.item', 'orders');
		}

		s.onClickUp = function() {
			timeout(function() { $window.scrollTo(0, 0); }, 0);
		};

		s.onClickMe = function() {
			console.log('me');
			rs.$broadcast('footer.activate.item', 'me');
		};

		s.$on('$destroy', function() {
			$(window).off("scroll", onWindowScroll);
		});

		init();
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/footer/footer.template.html'
	};
}];