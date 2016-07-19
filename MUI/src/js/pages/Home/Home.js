var React = require('react');
var MyApp = require('../../components/MyApp');
var MainLayout = require('../../components/MainLayout');
var SearchBox = require('../../components/SearchBox');
var SingleMovie = require('../../components/SingleMovie');


var Home = React.createClass({
  render () {
    return (
          <MainLayout />
    );
  }
});

module.exports = Home;
