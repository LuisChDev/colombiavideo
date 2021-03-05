import styled from 'styled-components';
import {StyledBody} from 'components/Body/styles';

const StyledAdminPage = styled(StyledBody)`
  justify-content: flex-start;
  padding: 80px 10px 0;
  box-sizing: border-box;
`;

const StyledAuthBox = styled.form`
  border: thin solid ${props => props.theme.colors.primary};
  min-height: 40px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSubmit = styled.input`
  margin: 10px 0;
`

export {StyledAdminPage, StyledAuthBox, StyledCenter, StyledSubmit};
