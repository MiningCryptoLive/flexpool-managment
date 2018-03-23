import styled from 'styled-components';
import { miniMargin, halfMargin, baseMargin, colors } from '../theme.js';


export const Inset = styled.div`
margin-top:${baseMargin}px;
  padding-top: ${halfMargin}px;
  padding-bottom: ${halfMargin}px;

  background-color: ${colors.insetGrey};
`;