
module.exports = [
	'$rootScope',
	'$location',
	'jQuery',
	'$window',
	'batchService',
	'ordersService',
	'$timeout',
	function(rs, location, $, $window, batchService, ordersService, timeout) {
	var link = function(s, e, a) {

		s.history = [''];
		s.tempOrders = {};
		s.num = 0;
		s.disableSaveBtn = true;

		s.onClickAddSs = function() {
			this.history.push('');
		};

		s.onClickRemove = function(i) {
			s.history.splice(i, 1);
			refresh();
		};

		function refresh() {
			ordersService.setBatch(s.history);
			var result = ordersService.validateBatch();
			s.disableSaveBtn = !result.ok;

			if(!result.ok) {
				return alert(result.message.join('\n'));
			} else {
				ordersService.formatBatch();
				s.tempOrders = ordersService.processBatch();
				s.num = Object.keys(s.tempOrders).length;
			}
		}

		s.onClickAddBatch = function() {
			refresh();
		};

		s.onClickSave = function() {
			if(!s.disableSaveBtn) {
				if(ordersService.isBatchEmpty()) return ;
				rs.$broadcast('spinner.show');
				timeout(function() {
					ordersService.saveBatch().then(function() {
						s.disableSaveBtn = false;
						location.path('/orders');
						rs.$broadcast('spinner.hide');
					});
				}, 1000);
			}
		};
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/batch-add/batch-add.template.html'
	};
}];