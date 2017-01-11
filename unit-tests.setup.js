setupBabel()
dontCompileStyleFiles()
prepEnvironmentForEnzyme()

function setupBabel () {
  require('babel-register')({
    "plugins": [
      "add-module-exports",
      "transform-class-properties"
    ],
    "presets": [
      "react",
      "airbnb"
    ]
  });
}

function dontCompileStyleFiles () {
  function noop() {
    return null;
  }

  require.extensions['.css'] = noop;
  require.extensions['.scss'] = noop;
}

function prepEnvironmentForEnzyme() {
  const jsdom = require('jsdom').jsdom;
  const exposedProperties = ['window', 'navigator', 'document'];

  global.document = jsdom('');
  global.window = document.defaultView;

  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  });

  global.navigator = {
    userAgent: 'node.js'
  };

  documentRef = document;
}
