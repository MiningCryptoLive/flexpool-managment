import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PopupComponent = styled.div`
  position: absolute;
  width: 350px;
  left: 36px;
  transform: translateY(-50%) translateY(-11px);
  border-left: 2px solid #00a88f;
  padding: 10px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1); 

  &:after,
  &:before {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-right-color: #ffffff;
    border-width: 10px;
    margin-top: -10px;
  }
  &:before {
    border-color: rgba(0, 168, 143, 0);
    border-right-color: #00a88f;
    border-width: 13px;
    margin-top: -13px;
  }
`;

export class Popup extends Component {
  static propTypes = {
    popupText: PropTypes.string
  };

  render() {
    return <PopupComponent>
      {this.props.popupText}
    </PopupComponent>;
  }
}

export default Popup;
