import React, { useLayoutEffect, useState, useEffect, useRef, useMemo } from 'react';
import QuotesSection from './QuotesSection';
import CharactersSection from './CharactersSection';

import {
  Container
} from '../styles/style';

function BodySection(props) {
  const [active, setActive] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const cacheRef = useRef({});
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

  const handleSetActive = (status) => {
    setActive(status);
  };
  const selectedComponent = useMemo(() => <QuotesSection characterQuotes={props.characterQuotes} selectedData={selectedData} />);
  return (
    <React.Fragment>
      <Container>
        <CharactersSection characters={props.characters} getListOfCharacters={props.getListOfCharacters} handleSetActive={handleSetActive} active={active} />
        {active && selectedComponent}
        
      </Container>
    </React.Fragment>
  )
};
export default BodySection;