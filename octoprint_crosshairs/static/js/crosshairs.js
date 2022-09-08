/*
 * View model for Crosshairs
 *
 * Author: ChippedChap
 * License: AGPLv3
 */
$(function() {
    function CrosshairsViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
		self.controlViewModel = parameters[0];
		
		self.crosshair_enabled = ko.observable();
		
		$(document).ready(function() {
			// Inject crosshairs
 			var databind = "data-bind='visible: webcamLoaded() && crosshair_enable()'";
			$("#webcam_container").append("<div id='crosshair-horz'" + databind + "></div>");
			$("#webcam_container").append("<div id='crosshair-vert'" + databind + "></div>");
		});
		
		self.onBeforeBinding = function() {
            self.crosshair_enabled(false);
        }
		
		self.crosshair_toggle = function() {
			console.log("Toggle Button clicked");
			self.crosshair_enabled(!self.crosshair_enabled());
		}
		
		self.controlViewModel.crosshair_enable = function() {
			return self.crosshair_enabled();
		}
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: CrosshairsViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ 'controlViewModel'],
        // Elements to bind to, e.g. #settings_plugin_crosshairs, #tab_plugin_crosshairs, ...
        elements: [ '#sidebar_plugin_crosshairs']
    });
});	
