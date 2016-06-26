module.exports = function( grunt ){
  grunt.initConfig({
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7,
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'views/images/',
            src: ['*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'views/images/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true,
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'views/images/',
            src: ['*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'views/images/',
            ext: '.jpg'
          }
        ]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  //grunt.registerTask('imagemin', ['imagemin']);
  grunt.registerTask('default', ['imagemin']);
};


