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

export class PlanningSection extends Component {
  static propTypes = {
    endResultUpdated: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.inputValueChange = inputValueChange.bind(this);

    this.inputRows = {
      collectDocuments: {
        id: 'collectDocuments',
        calculates: ['collectDocumentsProfitIndication', 'totalHoursProfit', 'endResult'],
      },
      checkHours: {
        id: 'checkHours',
        calculates: ['checkHoursProfitIndication', 'totalHoursProfit', 'endResult'],
      },
      checkInvoice: {
        id: 'checkInvoice',
        calculates: ['checkInvoiceProfitIndication', 'totalHoursProfit', 'endResult'],
      }
    };

    this.state = {
      collectDocuments: 0,
      checkHours: 0,
      checkInvoice: 0,
      collectDocumentsProfitIndication: 0,
      checkHoursProfitIndication: 0,
      checkInvoiceProfitIndication: 0,
      totalHoursProfit: 0,
      endResult:0
    }

    this.resultCalculations = {
      collectDocumentsProfitIndication: state => state.collectDocuments * 0.75,
      checkHoursProfitIndication: state => state.checkHours * 0.75,
      checkInvoiceProfitIndication: state => state.checkInvoice * 0.5,
      totalHoursProfit: state => (state.collectDocuments * 0.75) + (state.checkHours * 0.75) + (state.checkInvoice * 0.5),
      endResult: state => {
        const endResult = (((state.collectDocuments * 0.75) + (state.checkHours * 0.75) + (state.checkInvoice * 0.5)) / 40) * 50000;
        
        this.props.endResultUpdated(endResult)
        
        return endResult;
      }
    };
  }

  render() {
    const {collectDocuments, checkHours, checkInvoice} = this.inputRows; 

    return (
      <Section title="Tijdsbesteding Planning, registratie en coordinatie (uur per week)">
        <InputRow
          labelText="Verzamelen en doorsturen uitvraag"
          placeholder="Aantal"
          onValueChange={value => this.inputValueChange(collectDocuments, value)}
          subRowFirst="75%"
          subRowSecond={this.state.collectDocumentsProfitIndication}
        />
        <InputRow
          labelText="Contorleren, verzamelen, doorsturen van gewerkte uren"
          placeholder="Aantal"
          onValueChange={value => this.inputValueChange(checkHours, value)}
          subRowFirst="75%"
          subRowSecond={this.state.checkHoursProfitIndication}
        />
        <InputRow
          labelText="Factuurcontroler"
          placeholder="Aantal"
          onValueChange={value => this.inputValueChange(checkInvoice, value)}
          subRowFirst="50%"
          subRowSecond={this.state.checkInvoiceProfitIndication}
        />

        <Inset>
          <ResultRow 
            labelText="Besparing Loonkosten"
            subRowFirst="€50.000"
            subRowSecond={`${this.state.totalHoursProfit} uur`}
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

export default PlanningSection;
