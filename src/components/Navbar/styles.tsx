import styled from 'styled-components';

const NavContainer = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.tertiary};
`;

const StyledTitle = styled.h1`
    margin: auto 0;
    color: ${props => props.theme.colors.primary};

`



export { NavContainer, StyledTitle };
