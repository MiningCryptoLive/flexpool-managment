import React, { Component } from 'react';
import styled from 'styled-components';
import { baseMargin, colors } from '../theme.js';

const HeadComponent = styled.div`
  padding: ${baseMargin}px;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(104deg, #00a88f, #2d3170);
  justify-content: center;

    @media (min-width: 10px) and (max-width: 800px) {
    height: 200px;
    }

    @media (min-width: 10px) and (max-width: 400px) {
      height: 150px;
  }
`;

const BigTitle = styled.h1`
  color: ${colors.white};
  font-weight: 600;
  font-size: 64px;

  @media (min-width: 10px) and (max-width: 800px) {
    font-size: 32px;
    }

    @media (min-width: 10px) and (max-width: 400px) {
    font-size: 22px;
  }
`;

const TitleLabel = styled.p`
  font-weight: 200;
  font-size: 36px;
  color: ${colors.white};
  font-style: italic;

  @media (min-width: 10px) and (max-width: 800px) {
    font-size: 18px;
    }

    @media (min-width: 10px) and (max-width: 400px) {
    font-size: 14px;
  }
`;

export class Head extends Component {
  render() {
    return (
      <HeadComponent>
        <TitleLabel>Calculator:</TitleLabel>
        <BigTitle>ROI FlexpoolManagment</BigTitle>
      </HeadComponent>
    );
  }
}

export default Head;
