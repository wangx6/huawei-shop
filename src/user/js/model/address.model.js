module.exports = [
	'$q',
	'$http',
	'$location',
	'token',
	'validatorService',
	function($q, $http, location, token, validatorService) {
		function AddressModel() {
			const data = {
				line1: { 
					val: '', 
					required: true,
					label: 'address line 1',
					error: [],
					validate: function() {
						return this.error = validatorService
							.data(this.val)
							.required()
							.max(60)
							.getErr();
					},
				},
				line2: { 
					val: '', 
					required: true,
					label: 'address line 2',
					error: [],
					validate: function() {
						return this.error = validatorService
							.data(this.val)
							.required()
							.max(60)
							.getErr();
					},
				},
				country: { 
					val:'', 
					required: true,
					label: 'country',
					error: [],
					validate: function() {
						return this.error = validatorService
							.data(this.val)
							.required()
							.max(40)
							.getErr();
					},
				},
				city: { 
					val: '', 
					required: true,
					label: 'city',
					error: [],
					validate: function() {
						return this.error = validatorService
							.data(this.val)
							.required()
							.max(60)
							.getErr();
					},
				},
				postalCode: { 
					val: '', 
					required: false,
					label: 'postal code',
					error: [],
					validate: function() {
						return this.error = validatorService
							.data(this.val)
							.max(20)
							.getErr();
					},
				},
			};

			const getAddressDisplay = () => {
				return Object.keys(data).map(key => data[key].val).join(', ');
			}

			const validate = () => {
				const rs = { ok: false };
				let collection = [];
				Object.keys(data).forEach((k) => {
					collection = [...data[k].validate(), ...collection];
				});
				rs.ok = !collection.length;
				return rs;
			};

			return {
				data, 
				validate,
				getAddressDisplay,
			}
		}

		return AddressModel;
	}
];
