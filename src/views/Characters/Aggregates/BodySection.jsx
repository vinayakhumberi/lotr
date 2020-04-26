import React, { useLayoutEffect, useState, useEffect, useRef, useMemo } from 'react';
import Card from '../../../components/CharacterCard';
import QuotesSection from './QuotesSection';

import {
  Container
} from '../styles/style';

function BodySection(props) {
  const [active, setActive] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [offset, setOffsetData] = useState(1);
  const cacheRef = useRef({});
  const limit = 10;
  useLayoutEffect(() => {
    props.getListOfCharacters();
    return () => {}
  }, []);
  useEffect(() => {
    if (active !== null && !cacheRef.current[active]) {
      props.getQuotesOfCharacters(active);
    } else {
      setSelectedData(cacheRef.current[active]);
    }
    return () => {}
  },[active]);
  useEffect(() => {
    if (props.characterQuotes.status === 2) {
      cacheRef.current[props.characterQuotes.data.id] = props.characterQuotes.data.docs;
      setSelectedData(cacheRef.current[active]);
    }
    return () => { }
  }, [props.characterQuotes.status]);
  const handleSetActive = (e) => {
    const selected = e.currentTarget.getAttribute('data-id');
    setActive(active => active === selected ? null : selected);
  };
  const handleLoadMore = () => {
    setOffsetData(offset => offset + 1);
  };
  const cards = props.characters.status === 2 && props.characters.data.docs.slice(0, offset * limit).map(item => (
    <Card
      key={item._id}
      data={item}
      onClick={handleSetActive}
      selected={active===item._id}
    />
  ));
  const selectedComponent = useMemo(() => <QuotesSection characterQuotes={props.characterQuotes} selectedData={selectedData} />);
  return (
    <React.Fragment>
      <Container>
        <div>
          {cards}
          <button onClick={handleLoadMore}>
            load More
          </button>
        </div>
        {active && selectedComponent}
      </Container>
    </React.Fragment>
  )
};
export default BodySection;