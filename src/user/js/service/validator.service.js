module.exports = [function() {
	return {
		cache: null,
		error: [],

		/**
		 * 
		 */
		clear: function() { 
			this.error = []; 
			this.cache = null
			return this;
		},

		/**
		 * 
		 */
		data: function(data) { 
			this.clear(); 
			this.cache = data; 
			return this;
		},

		/**
		 * 
		 */
		requiredLen: function(len) {
			if(this.cache.length !== len)
			this.error.push({ error: `length must be ${len}` });
			return this;
		},

		/**
		 * 
		 */
		run: function() {
			return this.error;
		},

		/**
		 * 
		 */
		getErr: function() { 
			return this.error; 
		},

		/**
		 * 
		 */
		numOnly: function() {  
			if(/\D/.test(this.cache)) 
				this.error.push({ error: `number only` });
			return this;
		},

		/**
		 * 
		 */
		humanName: function() { 
			if(!/^[a-z A-Z]+'?[a-z A-Z]+$/.test(this.cache)) 
				this.error.push({ error: `invalid name` });
			return this;
		},

		/**
		 * 
		 */
		required: function() {
			if(!this.cache) 
				this.error.push({ error: `required` });
			return this;
		},

		/**
		 * 
		 */
		max: function(num) {
			if(this.cache.length > num) 
				this.error.push({error: `no longer than ${num}`});
			return this;
		},

		/**
		 * 
		 */
		min: function (num) {
			if(this.cache.length < num) 
				this.error.push({ error: `no less than ${num}` });
			return this;
		},

		/**
		 * 
		 */
		email: function() {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(this.cache.toLowerCase())) this.error.push({error: 'invalid email'});
            return this;
        },
	};
}]