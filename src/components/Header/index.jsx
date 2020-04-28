import React from 'react';
import Text from '../Text';
import {
  Link
} from "react-router-dom";
import {
  Container,
  Right,
  Left
} from './style';

export default function (props) {
  // console.log(props);
  return (
    <Container>
      <Left>
        <Link to="/" >
          <Text
            as={'h1'}
            text={props.logo}
            fontSize={24}
            color="#e65100"
          />
        </Link>
      </Left>
      <Right>
        {/* <Link to="/books" >
          <Text
            as={'h1'}
            text={"Books"}
            fontSize={16}
            color="#e65100"
            fontWeight={props.type === 'books' ? 700 : 400} 
          />
        </Link> */}
        <Link to="/characters" >
          <Text
            as={'h1'}
            text={"Characters"}
            fontSize={16}
            color="#e65100"
            fontWeight={props.type === 'characters' ? 700 : 400}
          />
        </Link>
        <Link to="/movies" >
          <Text
            as={'h1'}
            text={"Movies"}
            fontSize={16}
            color="#e65100"
            fontWeight={props.type === 'movies' ? 700 : 400} 
          />
        </Link>
      </Right>
    </Container>
  );
}