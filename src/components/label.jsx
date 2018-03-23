import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {miniMargin, halfMargin, colors} from '../theme.js'


const LabelComponent = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: ${colors.darkGrey};
    min-height: 30px;
    padding-top: 6px;
`;

const Star = styled.span`
    color: ${colors.green};
`

export class Label extends Component {
  static propTypes = {
    labelText: PropTypes.string,
    star: PropTypes.bool,
  }

  static defaultProps = {
    star: true,
    }   

  render() {
    const {labelText, star} = this.props;

    return (
      <LabelComponent>
        {labelText}{star ? <Star>*</Star> : null}
      </LabelComponent>
    )
  }
}

export default Label
