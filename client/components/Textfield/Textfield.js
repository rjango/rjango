// @flow
import React from 'react';
import { Textfield as MdlTextField } from 'react-mdl';

export default class Textfield extends React.Component {
  constructor(props:Object) {
    super(props);
    this.state = {
      value: props.value ? props.value : ''
    };
  }

  setFieldValue(e) {
    const value = e.target.value;
    this.setState({ field: value });
  }

  render() {
    const { label, floatingLabel } = this.props;
    return (
      <MdlTextField
        onChange={this.setFieldValue.bind(this)}
        label={label}
        floatingLabel={floatingLabel}
        style={{width: '100%'}}
      />
    );
  }

}
