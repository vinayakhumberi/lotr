import React from 'react';
import QuoteCard from '../../../components/QuoteCard';
import Text from '../../../components/Text';

import {
  StickyContainer,
  QuotesContainer
} from '../styles/style';

function BodySection(props) {
  return (
    <StickyContainer>
      <Text
       text="Quotes"
       color="#343434"
       fontWeight={700}
       paddingLeft={10}
       paddingRight={10}
       paddingBottom={10}
       fontSize={18}
       as="h4"
      />
      <QuotesContainer>
        {props.characterQuotes.status === 2 && (props.selectedData && props.selectedData.length ? props.selectedData.map(item => <QuoteCard key={item._id} data={item} />)
        : <Text text="No Dialogs Found!" paddingLeft={10} color="#343434" />)}
        {props.characterQuotes.status === 1 && <Text text={props.characterQuotes.message} paddingLeft={10} color="#343434" />}
      </QuotesContainer>
    </StickyContainer>
  )
};
export default BodySection;