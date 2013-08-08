/* Index ViewModel
 * View data binding
 */

(function(global, $, ko){

 	function indexViewModel() {
 		var self = this;

	 	self.property = 'Index ViewModel';
	 	self.foobarService = global.foobarService.getInstance();

	 	self.method = function() {};

	 	console.log(global.app.preload);
 	}

 	// Method Async

 	global.app.applyBindings.push(function(){
 		ko.applyBindings(new indexViewModel(), global.document.getElementById('index-view-model'));
 	});
	
 	// Method Sync
/*
 	$(global.document).ready(function(){
 		ko.applyBindings(new indexViewModel(), global.document.getElementById('index-view-model'));
 	});
*/
})(window, jQuery, ko);
