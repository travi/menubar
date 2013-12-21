module.exports = function (config) {
    config.set({
        files: [
            'node_modules/karma-jstd-adapter/jstd-adapter.js',

            'bower_components/jquery/jquery.js',
            'bower_components/jquery-ui/ui/jquery-ui.js',

            'js/jquery.menubar.js',

            'test/bootstrap.js',

            'test/**/*.jstd'
        ],

        browsers: ['PhantomJS']
    });
};
