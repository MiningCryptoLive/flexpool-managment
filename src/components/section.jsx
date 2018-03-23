import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {baseMargin, colors} from '../theme.js'

const SectionComponent = styled.div`
    padding: ${baseMargin}px;
`

const Title = styled.h2`
    padding-bottom: ${baseMargin}px;
    color: ${colors.green};
    font-weight: 600;
    font-size: 24px;
    max-width: 430px;
`;

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    const {title} = this.props;

    return (
      <SectionComponent>
        <Title>{title}</Title>
        <div>
            {this.props.children}
        </div>
      </SectionComponent>
    )
  }
}

export default Section
