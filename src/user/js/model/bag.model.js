module.exports = [
	'$q',
	'$http',
	'token',
	function($q, $http, token) {
		function ProductModel() {
			const bag = {
				data: []
			};

			const getData = () => bag.data;

			const add = (d) => {
				bag.data.push(d);
			}

			const remove = (id) => {
				for(let i = 0 ; i < bag.data.length; i++) {
					if(bag.data[i].id == id) {
						bag.data.splice(i, 1)
						return;
					}
				}
			}

			return {
				getData,
				add,
				remove,
			};
		}

		return ProductModel;
	}
];