/* Main App
 * Initialization of application here
 */

(function(global, $) {

 	var app = {
 		applyBindings: []
 	};

 	// Method Async
 	
 	$.getJSON('scripts/data.json', function(data){
 		global.app.preload = data;

 		for (var viewModel = 0; viewModel < app.applyBindings.length; viewModel++) {
 			app.applyBindings[viewModel]();
 		}
 	});

 	if (global.app != app) {
 		global.app = app;
 	}
/*	
 	// Method Sync

 	$(global.document).ready(function(){
 		var JSONpreload = $('#app-preload').html();

 		if (JSONpreload) {
 			global.app = JSON.parse(JSONpreload);
 		}
 	});
*/
})(window, jQuery);