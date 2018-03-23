import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseMargin, colors } from '../theme.js';

const TotalSectionComponent = styled.div`
  padding: ${baseMargin}px;
  width: 100%;
  height: 200px;
  display: flex;
  background-color: ${colors.green};
  align-items: center;
`;

const TotalTitle = styled.h3`
  color: ${colors.white};
  font-weight: 900;
  font-size: 36px;
  flex: 66.66666% 0 0;
  padding-right: 20px;

  @media (min-width: 10px) and (max-width: 800px) {
    font-size: 32px;
  }

  @media (min-width: 10px) and (max-width: 400px) {
    font-size: 24px;
  }
`;

const TotalCol = styled.div`
  flex: 33.33333% 0 0;
  padding-left: 20px;
`;

const TotalLabel = styled.p`
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 1);
  font-size: 25px;
  line-height: 40px;

  @media (min-width: 10px) and (max-width: 800px) {
    font-size: 20px;
  }

  @media (min-width: 10px) and (max-width: 400px) {
    font-size: 16px;
  }
`;

const TotalValue = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.white};
  line-height: 50px;

  @media (min-width: 10px) and (max-width: 800px) {
    font-size: 32px;
  }

  @media (min-width: 10px) and (max-width: 400px) {
    font-size: 24px;
  }
`;

export class TotalSection extends Component {
  static propTypes = {
    totalParts: PropTypes.array,
    coreTotal: PropTypes.number
  }

  render() {
    let total = 0;

    this.props.totalParts.forEach((totalNumber) => {
      if (typeof totalNumber !== 'number') {
        return;
      }

      total = total + totalNumber;
    })

    const percentageOf = (total / this.props.coreTotal) * 100

    return (
      <TotalSectionComponent>
        <TotalTitle>
          Mogelijkheid voor besparing door flexpool managment
        </TotalTitle>
        <TotalCol>
          <TotalLabel>{percentageOf | 0}% van €{this.props.coreTotal},-</TotalLabel>
          <TotalValue>€{total},-</TotalValue>
        </TotalCol>
      </TotalSectionComponent>
    );
  }
}

export default TotalSection;
