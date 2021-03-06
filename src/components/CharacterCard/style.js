import styled from "styled-components";
import { rem } from "../../utils/style.util";

export const Container = styled.div`
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.18);
  background: white;
  padding: ${rem(10)} ${rem(10)};
  width: ${rem(400)};
  margin-bottom: ${rem(20)};
  ${props => props.selected ? `border: 5px solid rgba(0,0,0, 0.8);` : 'border: 5px solid transparent;'}
  cursor: pointer;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;