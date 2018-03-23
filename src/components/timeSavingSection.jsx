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

export class TimeSavingSection extends Component {
  static propTypes = {
    hoursPerDay: PropTypes.number,
    hoursTempStaff: PropTypes.number,
    averageCostPerHour: PropTypes.number,
    endResultUpdated: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      notTooEarly: 0,
      notTooLate: 0,
      minutesSavedEarly: 0,
      minutesSavedLate: 0,
      totalHours: 0,
      endResult: 0
    };

    this.inputValueChange = inputValueChange.bind(this);

    this.inputRows = {
      notTooEarly: {
        id: 'notTooEarly',
        calculates: ['minutesSavedEarly', 'totalHours', 'endResult']
      },
      notTooLate: {
        id: 'notTooLate',
        calculates: ['minutesSavedLate', 'totalHours', 'endResult']
      }
    };

    this.resultCalculations = {
      minutesSavedEarly: state =>
        this.props.hoursPerDay * 60 * (state.notTooEarly / 100),
      minutesSavedLate: state =>
        this.props.hoursPerDay * 60 * (state.notTooLate / 100),
      totalHours: state =>
        (state.notTooEarly + state.notTooLate) /
        100 *
        this.props.hoursTempStaff,
      endResult: state => {
        const endResult =
          (state.notTooEarly + state.notTooLate) /
          100 *
          this.props.hoursTempStaff *
          this.props.averageCostPerHour;

        this.props.endResultUpdated(endResult);

        return endResult;
      }
    };
  }

  render() {
    const { notTooEarly, notTooLate } = this.inputRows;

    return (
      <Section title="Tijdswinst door beter registreren">
        <InputRow
          labelText="Niet te vroeg beginnen"
          placeholder="0%"
          onValueChange={value => this.inputValueChange(notTooEarly, value)}
          subRowSentenceResult="5 min"
          subRowSentenceLabel="per persoon per dag"
          popupText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <SubText>
            {this.state.minutesSavedEarly} min&nbsp;<SubTextLabel>
              per persoon per dag
            </SubTextLabel>
          </SubText>
        </InputRow>
        <InputRow
          labelText="Niet te laat klaar"
          placeholder="0%"
          onValueChange={value => this.inputValueChange(notTooLate, value)}
          popupText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <SubText>
            {this.state.minutesSavedLate} min&nbsp;<SubTextLabel>
              per persoon per dag
            </SubTextLabel>
          </SubText>
        </InputRow>

        <Inset>
          <ResultRow labelText="Uren per jaar die je bespaart" inset>
            <SubText>
              {this.state.totalHours}&nbsp;<SubTextLabel>Uren</SubTextLabel>
            </SubText>
          </ResultRow>
        </Inset>
        <SectionResult
          label="Totale besparing per jaar"
          result={this.state.endResult || 0}
        />
      </Section>
    );
  }
}

export default TimeSavingSection;
