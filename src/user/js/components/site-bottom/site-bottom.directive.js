module.exports = [
	'$location',
	function( location ) {
	
	var link = function(s, e, a) {
	};

	return {
		restrict: 'E',
		link: link,
		templateUrl: './js/components/site-bottom/site-bottom.template.html'
	};
}];