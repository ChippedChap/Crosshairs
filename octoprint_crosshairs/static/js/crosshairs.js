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
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];
		
		$(document).ready(function() {
			$("#webcam_container").append("<div id='crosshair-horz' data-bind='visible: webcamLoaded()'></div>");
			$("#webcam_container").append("<div id='crosshair-vert' data-bind='visible: webcamLoaded()'></div>");
		});
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: CrosshairsViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */ ],
        // Elements to bind to, e.g. #settings_plugin_crosshairs, #tab_plugin_crosshairs, ...
        elements: []
    });
});	
