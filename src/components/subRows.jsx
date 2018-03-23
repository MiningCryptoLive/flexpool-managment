import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const SubRowsComponent = styled.div`
  display: flex;
`;

const SubRow = styled.div`
  height: 30px;
  line-height: 30px;
  flex: 50% 0 0;
`;

export class SubRows extends Component {
  static propTypes = {
    valueOne: PropTypes.any,
    valueTwo: PropTypes.any
  }

  render() {
    const {valueOne, valueTwo} = this.props;

    return (
      <SubRowsComponent>
        <SubRow>
        {valueOne}
        </SubRow>
        <SubRow>
          {valueTwo}
        </SubRow>
      </SubRowsComponent>
    )
  }
}

export default SubRows
