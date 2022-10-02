module.exports= function( grunt ){
    
    // Config.
    grunt.initConfig( {
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* made by uglify */'
            },
            build: {
                src: ['js/*.js'],
                dest: 'build/js/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['index.html'],
                        dest: 'build'
                    },
                    {
                        expand: true,
                        src: ['vendor/**','pages/**','css/**'],
                        dest: 'build'
                    }
                ]
            }
        },
        watch: {
            files: ['index.html','pages/**','css/**','js/**'],
            tasks: ['fast']
        }
    } );
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('fast',['uglify','copy']);
    grunt.registerTask('default',['watch']);
}