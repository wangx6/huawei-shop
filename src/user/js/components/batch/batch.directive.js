module.exports = [
	'$rootScope',
	'$location',
	'jQuery',
	'$window',
	'batchService',
	function(rs, location, $, $window, batchService) {
	var link = function(s, e, a) {
		
		

	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/batch/batch.template.html'
	};
}];