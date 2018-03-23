import React, { Component } from 'react';
import PropTypes from 'prop-types';
import infoIcon from '../assets/info.svg';
import styled from 'styled-components';
import { Popup } from './popup';

const InfoIconComponent = styled.div`
  position: relative;
  display: inline;
`;

const InfoImage = styled.img`
  height: 18px;
  opacity: 0.5;
  transform: translateY(3px);
  cursor: pointer;
`;

export class InfoIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };

    this.setHover = this.setHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
  }



  static propTypes = {
    popupText: PropTypes.string
  };

  setHover() {
    this.setState({
      hover: true
    });
  }

  removeHover() {
    this.setState({
      hover: false
    });
  }

  render() {
    console.log(this.props.popupText);

    return (
      <InfoIconComponent
        onMouseEnter={this.setHover}
        onMouseLeave={this.removeHover}
      >
        <InfoImage src={infoIcon} />
        {this.state.hover ? <Popup popupText={this.props.popupText} /> : null}
      </InfoIconComponent>
    );
  }
}

export default InfoIcon;
