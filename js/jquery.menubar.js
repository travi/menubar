/*!
 * slide-down navigation menu, primarily intended for mobile
 * Original author: @mtravi
 * Dual licensed under the MIT or GPL Version 2 licenses
 */

(function ($) {
    "use strict";

    // Create the defaults once
    var pluginName = 'menuBar',
        defaults = {};

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.options = $.extend({}, defaults, options);

        this.defaults = defaults;
        this.name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
        var $this = $(this.element);

        $this.find('ul').hide().menu().before('<span class="ui-icon ui-icon-triangle-1-s"></span>');

        $this.find('>li').hover(
            function () {
                var $menuContainer = $(this),
                    $menu = $menuContainer.find('ul.ui-menu');

                $menu.position({
                    my: "left top",
                    at: "left bottom",
                    of: $menuContainer
                }).show();
            },
            function () {
                var $menuContainer = $(this),
                    $menu = $menuContainer.find('ul.ui-menu');

                $menu.position({
                    my: "left top",
                    at: "left top",
                    of: window
                }).hide();
            }
        );
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options));
            }
        });
    };

}(jQuery));