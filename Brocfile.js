var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles   = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');
var vulcanize = require('broccoli-vulcanize');

var app = new EmberApp();

app.import('bower_components/hammerjs/hammer.js');
app.import('bower_components/ember-hammer/ember-hammer.js');

var fontawesome = pickFiles('bower_components/fontawesome/', {
  srcDir: '/fonts',
  files: [
    'fontawesome-webfont.eot',
    'fontawesome-webfont.svg',
    'fontawesome-webfont.ttf',
    'fontawesome-webfont.woff'
  ],
  destDir: '/fonts'
});

var polymerVulcanize = vulcanize('app', {
  input: 'elements.html',
  output: 'assets/vulcanized.html',
  csp: true,
  inline: true,
  strip: false,
  excludes: {
    imports: ["(^data:)|(^http[s]?:)|(^\/)"],
    scripts: ["(^data:)|(^http[s]?:)|(^\/)"],
    styles: ["(^data:)|(^http[s]?:)|(^\/)"]
  }
});

var polymer = pickFiles('bower_components/', {
  srcDir: '',
  files: [
    'webcomponentsjs/webcomponents.js',
    'polymer/polymer.js',
    'polymer/polymer.html'
  ],
  destDir: '/assets'
});

app.import('bower_components/moment/moment.js');

module.exports = mergeTrees([
  polymerVulcanize,
  polymer,
  fontawesome,
  app.toTree()
]);

