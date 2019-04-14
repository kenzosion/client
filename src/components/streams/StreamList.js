import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';


class StreamList extends Component {
  // step 1
  componentDidMount() {
    return this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId ) {
      return (
        <div className="right floated content">
          <button className="ui button green">Edit</button>
          <button className="ui button red">Delete</button>
        </div>
      );
    }
  }

  //step 4
  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description"> {stream.description}</div>
          </div>
        </div>
      );
    })
  }

  renderCreate =() => {
    if( this.props.isSignedIn) {
      return (
        <div style={{textAlign:"right"}}>
          <Link to="/stream/new" className="ui button grey">
            Create stream
          </Link>
        </div>
      )
    }
  }

  render() {
    //step 3
    // console.log(this.props.streams);
    
    // step 5 
    return (
      <div>
        <h2> Streams </h2>
        <div className="ui celled list">
        {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    )
  }
}
//step 2
const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams),
          currentUserId: state.auth.userId,
          isSignedIn: state.auth.isSignedIn };

};

//Object.values = turns object to array , to make it easier to loop through

export default connect(mapStateToProps, {fetchStreams})(StreamList);
