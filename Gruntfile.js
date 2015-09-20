/**
 * Created by kumarp9 on 18/09/15.
 */

module.exports = function (grunt) {
    grunt.initConfig({

        web_server: {
            options: {
                cors: true,
                port: 8000,
                nevercache: true,
                logRequests: true
            },
            foo: 'bar'
        }
    });

    grunt.loadNpmTasks('grunt-web-server');
    grunt.registerTask('default', ['web_server']);
};
