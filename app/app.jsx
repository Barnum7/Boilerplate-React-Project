var React = require('react');
var ReactDOM = require('react-dom');
// destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load Foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Custom CSS
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Weather}/>

      <Route path="About" component={About} />
      <Route path="Examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);
