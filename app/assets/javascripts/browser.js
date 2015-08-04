var React = require('react');
var Photo = require('./Photo.react.js');

var browser = function() {
  var div = document.querySelector('[data-js="wrapper"]');
  React.render(<Photo />, div);
};

module.exports = browser;
