import React from 'react';
import Text from '../Text';
import {
  Container,
  Info
} from './style';

export default function (props) {
  return (
    <Container data-id={props.data._id} onClick={props.onClick} selected={props.selected} >
        <Text
          as={'h3'}
          text={props.data.name}
          fontSize={18}
          fontWeight={700}
          color="#343434"
          paddingBottom={10}
        />
        <Info>
          <Text
            text={'Runtime In Minutes'}
            fontSize={14}
            color="#546E7A"
          />
          <Text
            text={''+props.data.runtimeInMinutes}
            fontSize={14}
            color="#343434"
          />
          <Text
            text={'Budget In Millions'}
            fontSize={14}
            color="#546E7A"
          />
          <Text
            text={''+props.data.budgetInMillions}
            fontSize={14}s
            color="#343434"
          />
          <Text
            text={'Box Office Revenue In Millions'}
            fontSize={14}
            color="#546E7A"
          />
          <Text
            text={''+props.data.boxOfficeRevenueInMillions}
            fontSize={14}
            color="#343434"
          />
          <Text
            text={'Academy Award Wins'}
            fontSize={14}
            color="#546E7A"
          />
          <Text
            text={''+props.data.academyAwardWins}
            fontSize={14}
            color="#343434"
          />
        </Info>
    </Container>
  );
}