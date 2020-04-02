module.exports = [
	'$rootScope',
	'$location',
	'jQuery',
	'$window',
	'$timeout',
	'ordersService',
	'userService',
	function(rs, location, $, $window, timeout, ordersService, userService) {
	if(!userService.getIsLoaded()) location.path('/');
	var link = function(s, e, a) {
		e = $(e);
		var nameInput = e.find('.yh-add-order-description');
		nameInput.focus();

		s.priceBreak = [];
		// console.log(userService);

		function init() {
			s.data = angular.copy(ordersService.createRecord());
		}

		s.onClickSave = function() {
			s.data.description = ordersService.formatDescription(s.data.description);
			var check = ordersService.validate(s.data);
			if(check.ok) {
				ordersService.insert(s.data).then(function(data) {
					s.data = null;
					location.path('/orders');
				});
			} else {
				rs.$broadcast('warning.show', check.error);
			}
		};

		s.onClickCancel = function() {
			location.path('/orders');
		};

		s.onClickPreview = function() {
			var str = s.data.description;
			if(!str) return;
			var info = str.split(/:|：/);
			var name = info[0];
			var orders = info[1].split(/,|，/);
			var total = 0;
			var ps = [];
			orders.forEach(function(o) {
				o = o.trim().split(/\s+/);
				ps.push(o);
				if(o.length === 2) {
					total += parseFloat(o[1]);
				} else if(o.length === 3) {
					total += parseInt(o[1].replace(/\D*/g, '')) * parseFloat(o[2]);
				}
			});
			s.priceBreak = ps;
			s.data.name = name;
			s.data.price = total;
		};

		init();
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/add-orders/add-orders.template.html'
	};
}];