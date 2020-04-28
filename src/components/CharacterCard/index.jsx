import React from 'react';
import Text from '../Text';
import {
  Container,
  Info
} from './style';

export default function (props) {
  return (
    <Container data-id={props.data._id} onClick={props.onClick} selected={props.selected}>
        <Text
          as={'h3'}
          text={props.data.name}
          fontSize={18}
          fontWeight={700}
          color="#343434"
        />
        <Info>
          <Text
            text={'Race'}
            fontSize={14}
            color="#e65100"
          />
          <Text
            text={''+props.data.race}
            fontSize={14}
            color="#343434"
          />
          <Text
            text={'Gender'}
            fontSize={14}
            color="#e65100"
          />
          <Text
            text={''+props.data.gender}
            fontSize={14}s
            color="#343434"
          />
          <Text
            text={'Realm'}
            fontSize={14}
            color="#e65100"
          />
          <Text
            text={''+props.data.realm}
            fontSize={14}
            color="#343434"
          />
          <a
            href={''+props.data.wikiUrl}
            target="_blank"
          >
          <Text
            text={'More Info'}
            fontSize={14}
            color="#e65100"
          />
          </a>
        </Info>
    </Container>
  );
}