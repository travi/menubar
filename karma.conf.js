module.exports = function (config) {
    config.set({
        frameworks: ['referee'],

        files: [
            'bower_components/travi-test-utils/tools/assert-cache.js',
            'node_modules/karma-jstd-adapter/jstd-adapter.js',
            'bower_components/travi-test-utils/tools/assert-fix.js',

            'bower_components/jquery/jquery.js',
            'bower_components/jquery-ui/ui/jquery-ui.js',

            'js/jquery.menubar.js',

            'test/bootstrap.js',

            'test/**/*.jstd'
        ],

        browsers: ['PhantomJS']
    });
};
