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
import {inputValueChange } from '../utils';

export class CoreSection extends Component {
  static propTypes = {
      hoursPerDayUpdated: PropTypes.func,
      hoursTempStafUpdated: PropTypes.func,
      averageCostPerHourUpdate: PropTypes.func,
      endResultUpdated: PropTypes.func
  }
  
  constructor(props) {
    super(props);

    this.state = {
      noOfEmployees: 0,
      hoursPerDay: 0,
      daysPerYear: 0,
      averageCosts: 0,
      hoursTempStaff: 0,
      fteResult: 0,
      endResult: 0
    };

    this.inputValueChange = inputValueChange.bind(this);

    this.inputRows = {
      noOfEmployees: {
        id: 'noOfEmployees',
        calculates: ['hoursResult', 'fteResult', 'endResult']
      },
      hoursPerDay: {
        id: 'hoursPerDay',
        calculates: ['hoursResult', 'fteResult', 'endResult']
      },
      daysPerYear: {
        id: 'daysPerYear',
        calculates: ['hoursResult', 'fteResult', 'endResult']
      },
      averageCosts: {
        id: 'averageCosts',
        labelText: 'Gemiddelde kosten per uur',
        placeholder: '€_____,__',
        calculates: ['endResult']
      }
    };

    this.resultCalculations = {
      hoursResult: state => {
        const hoursTempStaff = state.noOfEmployees * state.hoursPerDay * state.daysPerYear;

        this.props.hoursPerDayUpdated(state.hoursPerDay);
        this.props.hoursTempStaffUpdated(hoursTempStaff) ;
        
        return hoursTempStaff;
      },
      fteResult: state =>
        (
          state.noOfEmployees *
          state.hoursPerDay *
          state.daysPerYear /
          1900
        ).toFixed(2),
      endResult: state => {
        this.props.averageCostPerHourUpdate(state.averageCosts);
        this.props.endResultUpdated(state.hoursResult * state.averageCosts); 
        return state.hoursResult * state.averageCosts; 
      }
    };
  }

  render() {
    const {
      noOfEmployees,
      hoursPerDay,
      daysPerYear,
      averageCosts
    } = this.inputRows;

    return (
      <Section title="Kerngegevens">
        {/* {this.generateInputRows(this.inputRows)} */}
        <InputRow
          labelText="Aantal medewerker"
          placeholder="Aantal medewerkers"
          onValueChange={value => this.inputValueChange(noOfEmployees, value)}
          popupText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <InputRow
          labelText="Aantal uur per dag"
          placeholder="Aantal uur"
          onValueChange={value => this.inputValueChange(hoursPerDay, value)}
          popupText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <InputRow
          labelText="Aantal dagen per jaar"
          placeholder="Aantal dagen"
          onValueChange={value => this.inputValueChange(daysPerYear, value)}
          popupText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Inset>
          <ResultRow
            labelText="Aantal uur inleen per jaar"
            text={`${this.state.hoursResult || '--'} / ${this.state.fteResult} FTE`}
            inset
          />
          <InputRow
            labelText="Gemiddelde kosten"
            placeholder="€----"
            onValueChange={value => this.inputValueChange(averageCosts, value)}
            inset
          />
        </Inset>
        <SectionResult
          label="Besparing loonkosten"
          result={this.state.endResult}
        />
      </Section>
    );
  }
}

export default CoreSection;
