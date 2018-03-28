import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { miniMargin, halfMargin, colors } from '../theme.js';

const RowComponent = styled.div`
  margin-bottom: ${halfMargin}px;
  display: flex;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 10px) and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex: 33.33333% 0 0;
  padding: 0 20px;

  &:first-of-type {
    padding-left: ${props => (props.inset ? '10px' : '0')};
  }

  &:last-of-type {
    padding-right: ${props => (props.inset ? '10px' : '0')};
  }

  @media (min-width: 10px) and (max-width: 800px) {
    padding: 0 ${props => (props.inset ? '10px' : '0')};

    &:last-of-type {
      display: ${props => (props.noCollapse ? 'initial' : 'none')};
    }
  }
`;

export class Row extends Component {
  static propTypes = {
    inset: PropTypes.bool,
    noCollapse: PropTypes.bool
  };
  static defaultProps = {
    inset: false,
    noCollapse: false
  };

  render() {
    return <RowComponent>{this.generateCols()}</RowComponent>;
  }

  generateCols() {
    const { children, inset, noCollapse } = this.props;

    if (!children) {
      throw 'This implementation of row should always have 3 children';
      return;
    }

    const cols = [];

    for (let i = 0; i < children.length; i++) {
      cols.push(
        <Col key={i} inset={inset} noCollapse={noCollapse}>
          {children[i]}
        </Col>
      );
    }

    return cols;
  }
}

export default Row;
