module.exports = [
	'$rootScope',
	'$location',
	'jQuery',
	'$window',
	'$timeout',
	'ordersService',
	'userService',
	'$q',
	function(rs, location, $, $window, timeout, ordersService, userService, $q) {
	
	var link = function(s, e, a) {
		if(!userService.getIsLoaded()) {
			location.path('/');
			return;
		}

		s.showSplitView = false;
		timeout(function() { $window.scrollTo(0, 0);});
		function init() {
			var id = location.search().id;
			s.data = angular.copy(ordersService.findById(id));
			if(!s.data || !s.data.id) location.path('/').search({});
			s.splitData = refreshSplitData(s.data);
		}

		function refreshSplitData(data) {
			var temp = angular.copy(data);
			temp = temp.priceBreak.map(function(p) {
				return { selected: false, data: p }
			});
			return temp;
		}

		function backToHome () {
			location.path('/orders').search({});
		}

		function reset() {
			s.data = {
				name: '',
				account: '',
				description: '',
				price: ''
			};
		}

		s.onClickCancleSplit = function() {
			s.showSplitView = false;
		}

		s.onClickConfirmSplit = function() {
			var data0 = angular.copy(s.data);
			var data1 = angular.copy(s.data);
			var selectedData = [];
			var unSelectedData = [];
			s.splitData.forEach(function(d) {
				if(d.selected) {
					selectedData.push(d.data);
				} else {
					unSelectedData.push(d.data);
				}
			});
			if(!selectedData.length || selectedData.length === s.splitData.length) return;
			
			var defer = $q.defer();
			rs.$broadcast('comfirmation.show', 'Proceed with split?', defer);
			defer.promise.then(function() {
				data0 = Object.assign(data0, {priceBreak: selectedData});
				data1 = Object.assign(data1, {priceBreak: unSelectedData});

				// create new description
				data0.description = `${data0.name}: ${data0.priceBreak.map(function(pb) {
					return pb.join(' ');
				}).join(', ')}`;

				data1.description = `${data1.name}: ${data1.priceBreak.map(function(pb) {
					return pb.join(' ');
				}).join(', ')}`;

				data0 = Object.assign(data0, ordersService.extractFromDescription(data0.description));
				data1 = Object.assign(data1, ordersService.extractFromDescription(data1.description));

				data0.dateTime = '';
				rs.$broadcast('spinner.show');
				$q.all([
					ordersService.update(data1),
					ordersService.insert(data0)
				]).then(function(res) {
					rs.$broadcast('spinner.hide');
					location.path('/orders').search({});
				});
			}, function() {
				console.log('canceled');
			});
			

		};

		s.onClickSeletSplitItem = function(p) {
			p.selected = !p.selected;
		};

		s.onClickSplit = function() {
			if(s.data.priceBreak.length <= 1) return;
			s.showSplitView = true;
		};

		s.onClickSave = function() {
			ordersService.update(s.data).then(function() {
				reset();
				backToHome()
			});
		};

		s.onClickPreview = function() {
			var str = s.data.description;
			if(!str) return;
			s.data = Object.assign(s.data, ordersService.extractFromDescription(str));
		};

		s.onClickCancel = function() {
			backToHome();
		};

		s.onClickDelete = function(i) {
			ordersService.remove([i]).then(function() {
				reset();
				backToHome();
			});
		}

		init();
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/edit-order/edit-order.template.html'
	};
}];