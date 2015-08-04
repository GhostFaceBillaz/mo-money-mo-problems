var React = require('react');

var browser = function() {
  var div = document.querySelector('[data-js="wrapper"]');
  React.render(React.DOM.h1(null, 'Makin it RAIN!!!'), div);
};

module.exports = browser;
