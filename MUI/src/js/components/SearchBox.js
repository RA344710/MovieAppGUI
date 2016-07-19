var React = require('react');
var Navbar = require('./Navbar');
var SingleMovie = require('./SingleMovie');

var SearchBox = React.createClass({

    createAjax: function(e){

        var query = React.findDOMNode(this.refs.query).value;
        
        console.log(query);

        var data = {
          s: query
        };
        var URL = 'http://www.omdbapi.com/?s';
        var myResults = [];
        var self = this;
        $.get(URL, data)
        .done(function(data) {
            var actualData = data.Search;
            actualData.forEach(function(movie) {

              myResults.push(<SingleMovie title={movie.Title} poster={movie.Poster} year={movie.Year} imdbid={movie.imdbID}/>);
            });
            self.setState({
              data: myResults
            });
        });

    },


    getInitialState: function() {
      return {
        data: ''
      }
    },

    render: function() {
        return (
          <div className="movieBox">
          <Navbar />
          <div>
            <div className = "well">
            <div className = "container">
                <input type="text" ref="query"  className="form-control"/>
            <div className="form-group">
            <div className="col-sm-offset-0 col-sm-10">
                <input type="submit" onClick={this.createAjax} value="Search" className="btn btn-success"/>
                <hr />
                {this.state.data}
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
        );
    }
  });

module.exports=SearchBox;
