import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  render() {
    return (
      <form>
        <Field />
      </form>
    )
  }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);