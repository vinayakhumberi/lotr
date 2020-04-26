import React from 'react';
import Text from '../Text';
import {
  Container,
  Info
} from './style';

export default function (props) {
  return (
    <Container>
        <Text
          as={'h3'}
          text={props.data.name}
          fontSize={18}
          fontWeight={700}
          color="#e65100"
        />
        <Info>
          <Text
            text={'Runtime In Minutes'}
            fontSize={14}
            color="#e65100"
          />
          <Text
            text={''+props.data.runtimeInMinutes}
            fontSize={14}
            color="#e65100"
          />
          <Text
            text={'Budget In Millions'}
            fontSize={14}
            color="#e65100"
          />
          <Text
            text={''+props.data.budgetInMillions}
            fontSize={14}s
            color="#e65100"
          />
          <Text
            text={'Box Office Revenue In Millions'}
            fontSize={14}
            color="#e65100"
          />
          <Text
            text={''+props.data.boxOfficeRevenueInMillions}
            fontSize={14}
            color="#e65100"
          />
          <Text
            text={'Academy Award Wins'}
            fontSize={14}
            color="#e65100"
          />
          <Text
            text={''+props.data.academyAwardWins}
            fontSize={14}
            color="#e65100"
          />
        </Info>
    </Container>
  );
}