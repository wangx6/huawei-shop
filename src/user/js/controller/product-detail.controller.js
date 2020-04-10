module.exports = [
	'$location', 
	'$timeout', 
	'$scope',
	'$rootScope',
	'$controller',
	'$window',
	'productService',
	'$routeParams',
	'bagService',
function(location, timeout, s, rootScope, $controller, win, productService, $routeParams, bagService) {
	timeout(function() { win.scrollTo(0, 0);}, 10);

	let id = '';

	s.data = null;
	s.productService = productService;

	const SelectionModel = function() {
		const requiredProps = ['color'];
		const data = {};
		const getData = () => angular.copy(data);
		const setVal = (prop, val) => {
			data[prop] = val;
		}
		const validate = () => {
			let rs = { ok: true, error: [] };
			requiredProps.forEach((p) => {
				if(!data[p]) {
					rs.ok = false;
					rs.error.push(`missing ${p}`);
				}
			});
			return rs;
		}
		return { getData, setVal, validate };
	};

	const selectionService = SelectionModel();

	/**
	 * INIT - SUB EVENT
	 */
	const init = () => {
		id = $routeParams.id;
		s.data = angular.copy(productService.findById(id));
		console.log(id);
		console.log(s.data);
	}

	/**
	 * EVENT
	 */
	s.onClickBack = () => {
		location.path('/product').search({});
	}

	/**
	 * EVENT
	 */
	s.onClickColorItem = (color) => {
		s.data.colorOptions.forEach((c) => {
			c.selected = color.val === c.val;
		});
		selectionService.setVal('color', color.val);
	}

	/**
	 * EVENT
	 */
	s.onClickAdd = () => {
			if(selectionService.validate().ok) {
				rootScope.$broadcast('spinner.show');
				timeout(() => {
					bagService.add(angular.copy(Object.assign(
						{}, 
						s.data, 
						{selectedSpec: selectionService.getData()}
					)));
					console.log(bagService.getData());
					rootScope.$broadcast('spinner.hide');
				}, 500);
			} else {
				console.log(selectionService.validate());
			}
		// console.log('add item to bag');
		// bagService.add();
	}

	init();
}];
