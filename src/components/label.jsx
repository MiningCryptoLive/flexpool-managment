import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { miniMargin, halfMargin, colors } from '../theme.js';
import { InfoIcon } from './infoIcon';

const LabelComponent = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.darkGrey};
  min-height: 30px;
  padding-top: 6px;

  @media (min-width: 10px) and (max-width: 800px) {
    padding-bottom: 20px;
  }
`;

const Star = styled.span`
  color: ${colors.green};
`;

export class Label extends Component {
  static propTypes = {
    labelText: PropTypes.string,
    star: PropTypes.bool,
    popupText: PropTypes.string
  };

  static defaultProps = {
    star: true
  };

  render() {
    const { labelText, star, popupText } = this.props;

    return (
      <LabelComponent>
        {labelText}
        {star ? <Star>*</Star> : null}&nbsp;{popupText ? (
          <InfoIcon popupText={popupText} />
        ) : null}
      </LabelComponent>
    );
  }
}

export default Label;
