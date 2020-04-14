module.exports = ['validatorService', function(validatorService) {
	function CheckoutFormModel() {
		const data = {
			cardName: {
				val: '',
				error: [],
				validate: function() {
					return this.error = [...validatorService.data(this.val).humanName().min(2).max(50).run()];
				},
			},
			cardNum: {
				val: '',
				error: [],
				validate: function() {
					return this.error = [...validatorService.data(this.val).requiredLen(16).run()];
				},
			},
			expiryMonth: {
				val: '',
				error: [],
				validate: function() {
					return this.error = [...validatorService.data(this.val).numOnly().range(1, 12).requiredLen(2).run()];
				},
			},
			expiryYear: {
				val: '',
				error: [],
				validate: function() {
					return this.error = [...validatorService.data(this.val).numOnly().range(21, 30).requiredLen(2).run()];
				},
			},
			cvc: {
				val: '',
				error: [],
				validate: function() {
					return this.error = [...validatorService.data(this.val).numOnly().requiredLen(3).run()];
				},
			},
		};

		const validate = () => {
			const rs = [].concat.apply([], Object.values(data).map((v) => v.validate()));
			return {
				ok: !rs.length, 
				error: rs
			}
		}

		const getData = () => {
			return data;
		}

		return {
			data,
			getData,
			validate,
		};
	}	
	return CheckoutFormModel;
}];