import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './section';
import InputRow from './inputRow';
import Row from './row';
import ResultRow from './resultRow';
import { miniMargin, halfMargin, baseMargin, colors } from '../theme.js';
import { SectionResult } from './sectionResult';
import { Inset } from './inset';
import { inputValueChange } from '../utils';

const SubText = styled.p`
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  color: ${colors.black};
`;

const SubTextLabel = styled.span`
  font-weight: 400;
  color: ${colors.textAfterGrey};
  font-style: italic;
`;

const Input = styled.input`
  border-width: 0 0 2px 0;
  border-color: ${colors.lightGrey};
  border-style: solid;
  color: ${colors.lightGrey};
  line-height: 30px;
  width: 100%;
`;

export class CostReductionSection extends Component {
  static propTypes = {
    averageCostPerHour: PropTypes.number,
    endResultUpdated: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      iron: 0,
      costFlexpool: 0,
      percentageInCost: 0,
      endResult: 0
    };

    this.inputValueChange = inputValueChange.bind(this);

    this.inputRows = {
      iron: {
        id: 'iron',
        calculates: ['endResult']
      },
      costFlexpoolPerHour: {
        id: 'costFlexpoolPerHour',
        calculates: ['endResult']
      },
      percentageInCost: {
        id: 'percentageInCost',
        calculates: ['endResult']
      }
    };

    this.resultCalculations = {
      endResult: state => {
        const endResult =
          state.iron *
          (this.props.averageCostPerHour - this.state.costFlexpoolPerHour) *
          (this.state.percentageInCost / 100);

        this.props.endResultUpdated(endResult);

        return endResult;
      }
    };
  }

  render() {
    const { iron, costFlexpoolPerHour, percentageInCost } = this.inputRows;

    return (
      <Section title="Kostenreductie & flexpoolmedewerkers">
        <InputRow
          labelText="Aantal ijzeren uitvraag"
          placeholder="Perodieke vaste uitvraag"
          onValueChange={value => this.inputValueChange(iron, value)}
        />

        <InputRow
          labelText="Gemiddelde kosten flexpool"
          placeholder="Per uur"
          onValueChange={value =>
            this.inputValueChange(costFlexpoolPerHour, value)
          }
        >
          <Input
            type="number"
            placeholder="Percentage in kosten"
            onChange={event =>
              this.inputValueChange(percentageInCost, event.target.value)
            }
          />
        </InputRow>

        <SectionResult
          label="Totale reductie flexpool"
          result={this.state.endResult || 0}
        />
      </Section>
    );
  }
}

export default CostReductionSection;
