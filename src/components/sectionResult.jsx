import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from './row';
import {Label} from './label';
import styled from 'styled-components';
import {colors, baseMargin} from '../theme'

const SectionResultComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: ${baseMargin}px 0 0 0;  
`

const SectionResultCol = styled.div`
    flex: 33.3333% 0 0;
    margin-left: 66.66666%;
    padding: 0 20px;

@media (min-width: 10px) and (max-width: 800px) {
    flex: 100%;
    padding: 0;
    margin-left: 0;
    text-align: right;
  }
`;

const SectionResultValue = styled.p`
    font-size: 36px;
    font-weight: 900;
    color: ${colors.green};
    height: 40px;
`;

export class SectionResult extends Component {
  static propTypes = {
    label: PropTypes.string,
    result: PropTypes.number
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {label, result} = this.props;

    return (
        <SectionResultComponent>
            <SectionResultCol>
                <Label labelText={label} star={false} />
                <SectionResultValue>
                    € {Math.round(result)},-
                </SectionResultValue>
            </SectionResultCol>
        </SectionResultComponent>
    )
  }
}

export default SectionResult;
