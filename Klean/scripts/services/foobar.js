/* Foobar Service
 * To share with any viewmodel
 */

 var foobarService = (function(){
 	var instance;

 	function init(){
 		var privateProperty = null;
 		function privateMethod() {}

 		return {
 			publicProperty: 'Foobar Service',
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
 })();