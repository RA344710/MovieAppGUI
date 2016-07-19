var React = require('react');

var SingleMovie = React.createClass({
    render: function() {
      return (
        <div className="row" id="features">
          <div className="col-sm-4 feature">
          <img src={this.props.poster} height="250" width="300"/><hr/>
          </div>
          <div className="col-sm-4 feature">
              <p id="details"><b>
                Title :{this.props.title}<br />
                Year :{this.props.year}<br />
                Movie Id :{this.props.imdbid}<br /></b></p>
          </div>
          <div className="col-sm-4 feature">

                  <input type="submit" className="btn btn-info" value="Edit" data-target={"#myModal" +this.props.imdbid} data-toggle="modal"/>

                  <div className="modal fade" id={"myModal"+this.props.imdbid} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                  <div className="modal-content">

                  <div className="modal-header">
                      <button className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Edit / Update Movie Details</h4>
                  </div>

                  <div className="modal-body">
                  <div className="col-sm-4 feature">
                    <img src={this.props.poster} height="150" width="150"/>
                    </div>
                    <div className="col-sm-4 feature">
                    <p id="details"><b>
                      Title :{this.props.title}<br />
                      Year :{this.props.year}<br />
                      Movie Id :{this.props.imdbid}<br /></b>
                    </p>
                    </div>

                  </div>

                  <div className="modal-footer">
                              <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                              <button className="btn btn-primary" type="button">Save Changes</button>
                  </div>

                  </div>
                  </div>
                  </div>


          </div>
        </div>
      )
    }
});

module.exports=SingleMovie;
