/* Foobar Service
 * To share with any viewmodel
 */

 var foobarService = (function(global, ko){
 	var instance;

 	function init(){
 		var privateProperty = null;
 		function privateMethod() {}

 		return {
 			publicProperty: ko.observable('Foobar Service'),
 			publicMethod: function() {}
 		}
 	}

 	return {
 		getInstance: function() {
 			if (!instance) {
 				instance = init();
 			}
 			return instance;
 		}
 	}
 })(window, ko);