import styled from "styled-components";
import { rem } from "../../utils/style.util";

export const Container = styled.div`
  padding: ${rem(10)} ${rem(50)};
  display: flex;
  justify-content: space-between;
`;

export const Right = styled.div`
display: flex;
a {
    text-decoration: none;
    margin-left: ${rem(20)};
  }
`;

export const Left= styled.div`
  a {
    text-decoration: none;
  }
`;