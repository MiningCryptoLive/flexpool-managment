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

export class SavingSection extends Component {

  static propTypes = {
    coreTotal: PropTypes.number,
    endResultUpdated: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      margin: 0,
      retention: 0,
      daysUntilProductive: 0,
      productionDifference: 0,
      profitIndication: 0,
      productionLoss: 0,
      productionLossInMoney: 0,
      endResult: 0
    };

    this.inputValueChange = inputValueChange.bind(this);

    this.inputRows = {
      margin: {
        id: 'margin',
        calculates: ['profitIndication']
      },
      retention: {
        id: 'retention',
        calculates: ['productionLoss', 'productionLossInMoney', 'endResult']
      },
      daysUntilProductive: {
        id: 'daysUntilProductive',
        calculates: ['productionLoss', 'productionLossInMoney', 'endResult']
      },
      productionDifference: {
        id: 'productionDifference',
        calculates: ['productionLoss', 'productionLossInMoney', 'endResult']
      }
    };

    this.resultCalculations = {
      profitIndication: state =>
        Math.round(state.margin / 100 * (40 / 100) * this.props.coreTotal),
      productionLoss: state =>
        Math.round(
          state.daysUntilProductive /
            state.retention *
            (state.productionDifference / 2)
        ),
      productionLossInMoney: state =>
        state.daysUntilProductive /
        state.retention *
        (state.productionDifference / 2) /
        100 *
        this.props.coreTotal,
      endResult: state => {
        const endResult = state.daysUntilProductive /
        state.retention *
        (state.productionDifference / 2) /
        100 *
        this.props.coreTotal *
        0.2;

        this.props.endResultUpdated(endResult);

        return endResult;
      }
        
    };
  }

  render() {
    const {
      margin,
      retention,
      daysUntilProductive,
      productionDifference
    } = this.inputRows;

    return (
      <Section title="Besparing op inleen & Productiviteitsverhoging">
        <InputRow
          labelText="Veiligheidsmarge op de uitvraag"
          placeholder="0%"
          onValueChange={value => this.inputValueChange(margin, value)}
          subRowFirst="40%"
          subRowSecond={`€${this.state.profitIndication},-`}
        />
        <InputRow
          labelText="Retentie"
          placeholder="In aantal werkdagen"
          onValueChange={value => this.inputValueChange(retention, value)}
        />
        <InputRow
          labelText="Aantal dagen tot een werknemer is ingewerkt"
          placeholder="In aantal dagen"
          onValueChange={value =>
            this.inputValueChange(daysUntilProductive, value)
          }
        />
        <InputRow
          labelText="Productieverschil ingewerkte en nieuwe krachten"
          placeholder="In percentage"
          onValueChange={value =>
            this.inputValueChange(productionDifference, value)
          }
        />

        <Inset>
          <ResultRow
            labelText="Productieverlies onervaren krachten"
            text={`${this.state.productionLoss}%`}
            inset
          />
          <ResultRow
            labelText="Productieverlies in geld"
            text={`€${this.state.productionLossInMoney},-`}
            subRowFirst={20}
            subRowSecond={`€${this.state.profitIndication},-`}
            inset
          />
        </Inset>
        <SectionResult
          label="Totale besparing per jaar"
          result={this.state.endResult}
        />
      </Section>
    );
  }
}

export default SavingSection;
