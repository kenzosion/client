import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';


class StreamList extends Component {
  // step 1
  componentDidMount() {
    return this.props.fetchStreams();
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
  return { streams: Object.values(state.streams)};
};

//Object.values = turns object to array , to make it easier to loop through

export default connect(mapStateToProps, {fetchStreams})(StreamList);
