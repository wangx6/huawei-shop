module.exports = [
	'$q',
	'$http',
	'token',
	function($q, $http, token) {
		function PurchaseModel() {
			const purchaseState = {
				data: {
					cardName: '',
					cardNum: '',
					expiryDate: {		
						month: '',
						year: ''
					},
					cvc: '',
				}
			};

			/**
			 * comment
			 */
			const setData = (data) => {
				const rs = validate(data);
				if(rs.length) throw new Error(rs[0].error);
				purchaseState.data = data;
			};

			/**
			 * comment
			 */
			const pay = () => {
				console.log('pay now...');
			};

			/**
			 * comment
			 */
			const getData = () => {
				return purchaseState.data;
			};

			/**
			 * 
			 */
			const numOnly = (val) => {
				return val.match(/\D/g);
			}

			/**
			 * comment
			 */
			const checkCardNumber = (n) => {
				if(numOnly(n))
					return  { ok: false, error: 'numbers only' }
				if(n.length !== 16) 
					return  { ok: false, error: 'incorrect length' }
				if(n.split('').reduce((acc, cur) => acc + parseInt(cur), 0) % 10 !== 0) 
					return  { ok: false, error: 'invalid card number' }
				return { ok: true };
			}

			/**
			 * 
			 */
			const checkCvc = (n) => {
				if(numOnly(n))
					return  { ok: false, error: 'numbers only' }
				if(n.length !== 16) 
					return  { ok: false, error: 'incorrect length' }
				return { ok: true };
			}

			/**
			 * 
			 */
			const checkExpMonth = (n) => {
				if(numOnly(n))
					return  { ok: false, error: 'numbers only' }
				if(n.length !== 2) 
					return  { ok: false, error: 'incorrect length' }
				return { ok: true };
			}

			/**
			 * 
			 */
			const checkExpYear = (n) => {
				if(numOnly(n))
					return  { ok: false, error: 'numbers only' }
				if(n.length !== 2) 
					return  { ok: false, error: 'incorrect length' }
				return { ok: true };
			}

			/**
			 * comment
			 */
			const validate = (data) => {
				const rs = [];
				rs.push(checkCardNumber(data.cardNum));
				rs.push(checkCvc(data.cvc));
				rs.push(checkExpMonth(data.expiryDate.month));
				rs.push(checkExpYear(data.expiryDate.year));
				return rs.filter((r) => !r.ok);
			};

			/**
			 * output
			 */
			return { validate, pay, getData, setData };
		}

		return PurchaseModel;
	}
];