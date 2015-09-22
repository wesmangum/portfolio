module.exports = function (grunt) {


	grunt.initConfig({
		less: {
			development: {
				files: {
					"css/creative.css": "less/creative.less"
				}
			}
		},
		watch: {
			styles: {
				files: ['less/**/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask( 'default', ['less', 'watch']);
};