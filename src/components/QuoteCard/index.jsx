import React from 'react';
import Text from '../Text';
import {
  Container,
  Info
} from './style';

export default function (props) {
  return (
    <Container data-id={props.data._id} >
        <Text
          as={'p'}
          text={props.data.dialog || 'Missing Dialog'}
          fontSize={14}
          fontWeight={700}
          color="#343434"
          display="inline"
        />
    </Container>
  );
}