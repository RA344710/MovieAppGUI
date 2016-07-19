var React = require('react');
var Navbar = require('./Navbar');
var SearchBox = require('./SearchBox');

var MyApp = React.createClass({
    render: function(){
        return (
            <div>
                <SearchBox/>
            </div>
        );
    },
});

module.exports=MyApp;
