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

export const Input = styled.input`
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: ${rem(50)};
  margin: ${rem(10)} ${rem(0)};
  &:focus{
    outline: none;
  }
`;

export const Button = styled.button`
  color: #e65100;
  font-size: ${rem(14)};
  background: transparent;
  border: none;
  box-shadow: none;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: ${rem(20)};
`;
