import styled from "styled-components";
import { rem } from "../../../utils/style.util";

export const Container = styled.div`
  padding: ${rem(10)} ${rem(50)};
  display: grid;
  display: flex;
  justify-content: space-between;
`;

export const StickyContainer = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: ${rem(30)};
  display: block;
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '80vh'};
  padding: ${ props => props.padding ? props.padding : rem(15)};
  margin-bottom: ${rem(65)};;
  background: white;
  margin-left: ${rem(40)};
`;

export const QuotesContainer = styled.div`
    height: 90%;
    overflow: auto;

`;