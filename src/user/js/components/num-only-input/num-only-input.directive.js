module.exports = [function() {
	
	const link = function(s, e, a) {
		e[0].onkeyup = function() {
			e[0].value = e[0].value.replace(/\D/, '');
		};
	};

	return {
		restrict: 'A',
		link: link,
	};
}];