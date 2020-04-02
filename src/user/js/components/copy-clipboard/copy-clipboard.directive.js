module.exports =  ['$rootScope', '$q', '$window', '$timeout', function (rs, $q, $window, timeout) {


	var link = function (s, e) {
		var textarea = e.find('textarea');
		s.strToCopy = '';

		var sub0 = rs.$on('clipboard.copy', copy);

		s.showNotification = false;

		function onSuccess() {
			s.showNotification = true;
			timeout(function() {
				s.showNotification = false;
			}, 1500);
		}

		function copy(evt, str) {
	        var deferred = $q.defer();
	        deferred.notify("copying the text to clipboard");
	        textarea.val(str);
	        textarea[0].select();

	        try {
	            var successful = $window.document.execCommand('copy');
	            if (!successful) throw successful;
	            deferred.resolve(successful);
	            onSuccess();
	        } catch (err) {
	            deferred.reject(err);
	            // window.prompt("Copy to clipboard: Ctrl+C, Enter", toCopy);
	        } finally {
	        }
	        return deferred.promise;
		}

		s.$on('$destroy', function() {
			sub0();
		});
    }

   
    return {
    	restrict: 'E',
    	replace: true,
    	link: link,
    	templateUrl: './js/components/copy-clipboard/copy-clipboard.template.html'
    };
   
}];