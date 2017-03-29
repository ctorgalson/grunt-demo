/**
 * This Gruntfile demonstrates how to retrieve a css file and change its paths.
 *
 * To use:
 *
 * - Ensure npm is installed.
 * - Run `npm install -g grunt-cli`.
 * - Navigate to the directory containing Gruntfile.js.
 * - Customize the following vars below to suit the local environment:
 *     - cssDownloads
 *     - assetPathReplacement
 *     - applicationCssDir
 * - Run `grunt css`.
 *
 * Running `grunt css` performs the following tasks:
 *
 * 1. Download the css file(s) contained in cssDownloads to tempDownloadDir
 *    (the tempDownloadDir will be created if it does not exist).
 * 2. Read each file into memory, replacing any text matching assetPathPattern
 *    with assetPathReplacement.
 * 3. Write each file into the direcroy specified by applicationCssDir.
 */
module.exports = function (grunt) {
    "use strict";

    // This is a list of css files to download on `grunt css`.
    const cssDownloads = [
        "http://example.com/assets/css/app.css"
    ];
    // This is the path (relative to the directory containing Gruntfile.js) to
    // download css files to. It should be included in the .gitignore file.
    const tempDownloadDir = "tmp/";
    // This is the string to replace in the css file(s). All of the urls in the
    // css files include /assets/, so this should probably work as-is.
    const assetPathPattern = /(\/assets\/)/g;
    // This is the test to replace assetPathPattern with. It's a string, but
    // backreferences work. Using this replacement, /assets/ will be replaced by
    // /path/to/application/assets/
    const assetPathReplacement = "/path/to/application$1";
    // This is the path (relative to the directory containing Gruntfile.js) to
    // the directory where the modified css file should be written.
    const applicationCssDir = "build/";

    // Configure grunt tasks.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        "downloadfile": {
            options: {
                async: false,
                dest: tempDownloadDir
            },
            files: cssDownloads
        },

        "string-replace": {
            css: {
                options: {
                    replacements: [
                        {
                            pattern: assetPathPattern,
                            replacement: assetPathReplacement
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        cwd: tempDownloadDir,
                        src: "**/*.css",
                        dest: applicationCssDir
                    }
                ]
            }
        }
    });

    // Load third party tasks.
    grunt.loadNpmTasks("grunt-downloadfile");
    grunt.loadNpmTasks("grunt-string-replace");

    // Register defined tasks.
    grunt.registerTask("css", ["downloadfile", "string-replace"]);
};
