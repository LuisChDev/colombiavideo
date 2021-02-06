import styled from 'styled-components';

const NavContainer = styled.div<{
  bknd: string
}>`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.bknd};
`;

export { NavContainer }
