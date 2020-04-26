import styled from "styled-components";
import { rem } from "../../utils/style.util";

export const Container = styled.div`
  background: white;
  padding: ${rem(10)} ${rem(10)};
  width: 100%;
  &:before {
    content: '> '
  }
`;