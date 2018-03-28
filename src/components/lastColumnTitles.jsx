import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from './row';
import styled from 'styled-components';
import { colors } from '../theme';

const TitleCol = styled.div`
  display: flex;
`;
const SubTitle = styled.h5`
  display: block;
  flex: 50% 0 0;
  font-size: 16px;
  font-weight: 200;
  color: ${colors.green};
  font-style: italic;
  padding-right: 20px;
`;

export class LastColumnTitles extends Component {
  static propTypes = {
    firstTitle: PropTypes.string,
    secondTitle: PropTypes.sting
  };

  render() {
    const { firstTitle, secondTitle } = this.props;

    return (
      <Row>
        <p />
        <p />
        <TitleCol>
          <SubTitle>{firstTitle}</SubTitle>
          <SubTitle>{secondTitle}</SubTitle>
        </TitleCol>
      </Row>
    );
  }
}

export default LastColumnTitles;
