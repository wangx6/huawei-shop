module.exports = [
	'$rootScope',
	'$location', 
	'$timeout', 
	'userService',
	'$window',
	'jQuery',
	'statisticsService',
function(rs, location, timeout, userService, $window, $, statisticsService) {
	function link(s, e) {
		timeout(function() { $window.scrollTo(0, 0); });

		s.detail = {
			visibility: false,
			text: 'Show all'
		};

		s.$watch('data', function() {
			// console.log(s.data);
			if(s.data && s.data.data && s.data.data.length) {
				s.data.data.map(function(d) {
					d.style = {width: d.total / s.data.max.toFixed(2) * 100 + '%'};
				});
			}
		});

		s.onClickToggle = function() {
			s.detail.visibility = !s.detail.visibility;
			s.detail.text = s.detail.visibility ? 'Hide all' : 'Show all';
		};

	}

	return {
		link: link,
		restricted: 'E',
		scope: {
			data: '<',
			title: '@'
		},
		templateUrl: './js/components/spending-graph/spending-graph.template.html'
	};

}];