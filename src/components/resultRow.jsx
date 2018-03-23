import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { miniMargin, halfMargin, colors } from '../theme.js';
import Label from './label';
import Row from './row';
import SubRows from './subRows'

const Result = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.darkGrey};
  min-height: 30px;
  display: flex;
  align-items: center;
`;

export class ResultRow extends Component {
  static propTypes = {
    labelText: PropTypes.string,
    text: PropTypes.string,
    star: PropTypes.bool,
    inset: PropTypes.bool,
    subRowFirst: PropTypes.any,
    subRowSecond: PropTypes.any
  };

  static defaultProps = {
    star: true,
    inset: false
  };

  renderLastCol() {
    const {subRowFirst, subRowSecond, children} = this.props;

    if(subRowFirst) {
      return <SubRows valueOne={subRowFirst} valueTwo={subRowSecond}/>
    }

    if(children) {
      return children;
    }

  }
  
  render() {
    const { labelText, star, text, inset, subRowFirst, subRowSecond } = this.props;

    return (
      <Row inset={inset}>
        <Label labelText={labelText} star={star} />
        <Result>{text}</Result>
        {this.renderLastCol()}
      </Row>
    );
  }
}

export default ResultRow;
