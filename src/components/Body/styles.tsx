import styled from 'styled-components';

const StyledBody = styled.div`
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    height: 700px;
    width: 100%;
    z-index: -100;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export {StyledBody};
