module.exports = [
	'$rootScope',
	'$location', 
	'$timeout', 
	'userService',
	'$window',
function(rs, location, timeout, userService, $window) {
	function link(s) {
		timeout(function() { $window.scrollTo(0, 0); });
		s.data = {user: '', password: ''};
		s.show = false;

		var sub0 = rs.$on('menu.show', function() {
			s.show = true;
		})
		s.show = false;
		function init() {
			
		}

		s.onClickMenuMask = function() {
			s.show = false;
		};

		s.onClickHermes = function() {
			location.path('hermes');
		};

		s.onClickDataAnaytics = function() {
			location.path('data-analytics');
		};

		s.onClickBatchAdd = function() {
			location.path('batch-add');
		};

		s.onClickArchived = function() {
			location.path('/orders').search({spec: 'archived'});
		};

		s.$on("$destroy", function() {
	        sub0();
	    });


		init();
	}

	return {
		link: link,
		restricted: 'E',
		templateUrl: './js/components/menu/menu.template.html'
	};

}];