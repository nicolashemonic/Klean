/* Index ViewModel
 * View data binding
 */

(function(global, $, ko){

 	function indexViewModel() {
 		var self = this;

	 	self.property = 'Index ViewModel';
	 	self.foobarService = global.foobarService.getInstance();

	 	self.method = function() {};
 	}

 	$(global.document).ready(function(){
 		ko.applyBindings(new indexViewModel(), global.document.getElementById('index-view-model'));
 	});

})(window, jQuery, ko);
