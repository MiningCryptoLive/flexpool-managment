import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './row';
import { baseMargin, colors } from '../theme.js';

const MailSectionComponent = styled.div`
  padding: ${baseMargin}px;
  background-color: #2d3270;
  color: white;
`;

const MailSectionText = styled.header`
  font-size: 24px;
  font-weight: 400;
  color: white;
  padding-right: 20px;

  @media (min-width: 10px) and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

const MailInput = styled.input`
  border-width: 0 0 2px 0;
  border-color: ${colors.lightGrey};
  border-style: solid;
  color: ${colors.lightGrey};
  line-height: 30px;
  width: 100%;
  margin-top: 27px;


  @media (min-width: 10px) and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

const SendMailButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  background-color: #00a88f;

  @media (min-width: 10px) and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export class MailSection extends Component {
  static propTypes = {};

  render() {
    return (
      <MailSectionComponent>
        <Row noCollapse>
          <MailSectionText>Ontvang je berekening per mail.</MailSectionText>
          <MailInput type="email"/>
          <SendMailButton>Verstuur berekening</SendMailButton>
        </Row>
      </MailSectionComponent>
    );
  }
}

export default MailSection;
