module.exports = [
	'$q',
	'$http',
	'token',
	function($q, $http, token) {
		function ProductModel() {
			const bag = {
				subtotal: 0,
				data: []
			};

			/**
			 * 
			 */
			const getData = () => bag;

			/**
			 * 
			 */
			const add = (d) => {
				bag.data.push(d);
				refresh();
			}

			/**
			 * 
			 */
			const remove = (id) => {
				for(let i = 0 ; i < bag.data.length; i++) {
					if(bag.data[i].id == id) {
						bag.data.splice(i, 1)
						refresh();
						return;
					}
				}
			}

			/**
			 * 
			 */
			const reset = () => {
				bag.data = [];
				bag.subtotal = 0;
			}

			/**
			 * 
			 */
			const getNumOfItem = () => {
				return bag.data.length; 
			}

			/**
			 * 
			 */
			const isEmpty = () => {
				return bag.data.length === 0;
			}

			/**
			 * 
			 */
			const calSubtotal = () => {
				bag.subtotal = bag.data.reduce((acc, cur) => {
					return acc += parseFloat(cur.rrp);
				}, 0.00);
			}

			/**
			 * 
			 */
			const getSubtotal = () => {
				return bag.subtotal;
			};


			/**
			 * 
			 */
			const refresh = () => {
				calSubtotal();
			}

			/**
			 * output
			 */
			return {
				bag,
				getData,
				add,
				remove,
				reset,
				getNumOfItem,
				isEmpty,
				getSubtotal,

			};
		}

		return ProductModel;
	}
];