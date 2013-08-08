/* ViewModel B
 * View data binding
 */

(function(global, $, ko){

 	function viewModel() {
 		var self = this;

	 	self.property = 'Hello, ViewModel B!';
	 	self.foobarService = global.foobarService.getInstance();
	 	self.JSONpreload = global.app.preload;

	 	self.updateFoobarService = function() {
	 		self.foobarService.publicProperty('Foobar Service <span class="label label-info">ViewModel B update</span>')
	 	};
 	}

 	// Method Async

 	global.app.applyBindings.push(function(){
 		ko.applyBindings(new viewModel(), global.document.getElementById('view-model-b'));
 	});
	
 	// Method Sync
/*
 	$(global.document).ready(function(){
 		ko.applyBindings(new viewModel(), global.document.getElementById('view-model-b'));
 	});
*/
})(window, jQuery, ko);
