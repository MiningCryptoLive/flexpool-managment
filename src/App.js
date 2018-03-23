import React, { Component } from 'react';
import styled from 'styled-components';
import { miniMargin, halfMargin, baseMargin, colors } from './theme.js';
import Section from './components/section';
import InputRow from './components/inputRow';
import Row from './components/row';
import ResultRow from './components/resultRow';
import { CoreSection } from './components/coreSection';
import PlanningSection from './components/planningSection';
import { SavingSection } from './components/savingSection';
import { TimeSavingSection } from './components/timeSavingSection';
import { CostReductionSection } from './components/costReductionSection';
import Head from './components/head';
import { TotalSection } from './components/totalSection';

const Container = styled.div`
  margin: ${baseMargin}px auto;
  min-height: 100px;
  width: 1000px;
  background-color: ${colors.white};
  box-shadow: 0 0 100px 10px ${colors.shadowBlack};

  @media (min-width: 10px) and (max-width: 1000px) {
    margin: 0;
    width: 100%;
  }
`;

const Inset = styled.div`
  padding-top: ${halfMargin}px;
  padding-bottom: ${halfMargin}px;

  background-color: ${colors.insetGrey};
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.coreTotalChanged = this.coreTotalChanged.bind(this);
    this.planningTotalChanged = this.planningTotalChanged.bind(this);
    this.savingTotalChanged = this.savingTotalChanged.bind(this);
    this.timeSavingTotalChanged = this.timeSavingTotalChanged.bind(this);
    this.costReductionTotalChanged = this.costReductionTotalChanged.bind(this);

    this.hoursPerDayChanged = this.hoursPerDayChanged.bind(this);
    this.hoursTempStaffChanged = this.hoursTempStaffChanged.bind(this);
    this.averageCostPerHourChanged = this.averageCostPerHourChanged.bind(this);

    this.state = {
      coreTotal: 0,
      planningTotal: 0,
      savingTotal: 0,
      timeSavingTotal: 0,
      costReductionTotal: 0,
      hoursPerDay: 0,
      hoursTempStaff: 0
    };
  }

  // TOTALS

  coreTotalChanged(value) {
    this.setState({
      coreTotal: value
    });
  }

  planningTotalChanged(value) {
    this.setState({
      planningTotal: value
    });
  }
  savingTotalChanged(value) {
    this.setState({
      savingTotal: value
    });
  }

  timeSavingTotalChanged(value) {
    this.setState({
      timeSavingTotal: value
    });
  }

  costReductionTotalChanged(value) {
    this.setState({
      costReductionTotal: value
    });
  }

  // SUBINPUTS

  hoursPerDayChanged(value) {
    this.setState({
      hoursPerDay: value
    });
  }

  hoursTempStaffChanged(value) {
    this.setState({
      hoursTempStaff: value
    });
  }

  averageCostPerHourChanged(value) {
    this.setState({
      averageCostPerHour: value
    });
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Head />
        <CoreSection
          endResultUpdated={this.coreTotalChanged}
          hoursPerDayUpdated={this.hoursPerDayChanged}
          hoursTempStaffUpdated={this.hoursTempStaffChanged}
          averageCostPerHourUpdate={this.averageCostPerHourChanged}
        />
        <PlanningSection endResultUpdated={this.planningTotalChanged} />
        <SavingSection
          coreTotal={this.state.coreTotal}
          endResultUpdated={this.savingTotalChanged}
        />
        <TimeSavingSection
          hoursPerDay={this.state.hoursPerDay}
          hoursTempStaff={this.state.hoursTempStaff}
          averageCostPerHour={this.state.averageCostPerHour}
          endResultUpdated={this.timeSavingTotalChanged}
        />

        <CostReductionSection
          averageCostPerHour={this.state.averageCostPerHour}
          endResultUpdated={this.costReductionTotalChanged}
        />
        <TotalSection
          totalParts={[
            this.state.planningTotal,
            this.state.savingTotal,
            this.state.timeSavingTotal,
            this.state.costReductionTotal
          ]}

          coreTotal={this.state.coreTotal}
        />
      </Container>
    );
  }
}

export default App;
