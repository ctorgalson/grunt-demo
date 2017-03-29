# Grunt demo: download file(s), replace text, and save to directory

This repository demonstrates how to use [`Grunt`](https://gruntjs.com/) to
download a css file from a public url, replace text in file paths, and save
the modified file to a specified directory.

## Install required software

- `npm`: to use `Grunt` its necessary to [install `node` and `npm`](https://www.npmjs.com/get-npm).
- `grunt-cli`: with `npm` installed, run `npm install -g grunt-cli`.

## Customize `Gruntfile.js`

There are several variables used in `Gruntfile.js`. Some or all of these will
need to be customized:

| Name                   | Type   | Default Value                               | Description |
|------------------------|--------|---------------------------------------------|-------------|
| `cssDownloads`         | Array  | `[ http://example.com/assets/css/app.css ]` | An array of urls to publicly available files to download. |
| `tempDownloadDir`      | String | `tmp/`                                      | Path (relative to the directory containing `Gruntfile.js`) to a temporary directory to download files to. Should be added to `.gitignore`. |
| `assetPathPattern`     | RegExp | `/(\/assets\/)/g`                           | Regular expression for the pattern of text to replace in file paths in downloaded files. |
| `assetPathReplacement` | String | `/path/to/application$1`                    | Text to replace in file paths in downloaded files. May include backreferences to `assetPathPattern`. |
| `applicationCssdir`    | String | `build/`                                    | Path to directory where modified files should be written. |

## Install `npm` dependencies

With the required software installed, and variables customized, navigate
to the directory containing `Gruntfile.js` in a terminal, and run `npm install`.

## Run `grunt`

With the required software installed, variables customized, and
dependencies installed, navigate to the directory containing `Gruntfile.js`
in a terminal, and run `grunt css`.
