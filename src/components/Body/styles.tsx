import styled from 'styled-components';

const StyledBody = styled.div<{
  colorBackground: string
}>`
  background-color: ${props => props.colorBackground};
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -100;
  padding-top: 80px;
`

export {StyledBody}
