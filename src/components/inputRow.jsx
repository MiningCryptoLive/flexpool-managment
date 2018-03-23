import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { miniMargin, halfMargin, colors } from '../theme.js';
import Label from './label';
import Row from './row';
import SubRows from './subRows';

const Input = styled.input`
  border-width: 0 0 2px 0;
  border-color: ${colors.lightGrey};
  border-style: solid;
  color: ${colors.lightGrey};
  line-height: 30px;
  width: 100%;
`;


export class InputRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.props.onValueChange(event.target.value);
  }

  static propTypes = {
    labelText: PropTypes.string,
    star: PropTypes.bool,
    placeholder: PropTypes.string,
    inset: PropTypes.bool,
    onValueChange: PropTypes.func,
    subRowFirst: PropTypes.any,
    subRowSecond: PropTypes.any
  };

  static defaultProps = {
    star: true,
    inset: false
  };

  renderLastRow() {
    const {subRowFirst, subRowSecond, children } = this.props;
    
    if(subRowFirst) {
      return <SubRows valueOne={subRowFirst} valueTwo={subRowSecond}/>
    }

    if(children) {
      return children;
    }

  }

  render() {
    const { labelText, star, placeholder, inset, subRowFirst, subRowSecond } = this.props;

    return (
      <Row inset={inset}>
        <Label labelText={labelText} star={star} />
        <Input
          value={this.state.value}
          type="number"
          placeholder={placeholder}
          onChange={this.onInputChange}
        />

        {this.renderLastRow()}

      </Row>
    );
  }
}

export default InputRow;
