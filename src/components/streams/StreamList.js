import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';


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
          <i className="large middle aligned icon camera"></i>
          <div className="content">{stream.title}
            <div className="description"> {stream.description}</div>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    })
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
      </div>
    )
  }
}
//step 2
const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams),
          currentUserId: state.auth.userId };

};

//Object.values = turns object to array , to make it easier to loop through

export default connect(mapStateToProps, {fetchStreams})(StreamList);
