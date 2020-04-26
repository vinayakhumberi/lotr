import React, { useLayoutEffect, useState, useEffect, useRef, useMemo } from 'react';
import Card from '../../../components/MovieCard';
import QuotesSection from './QuotesSection';

import {
  Container
} from '../styles/style';

function BodySection(props) {
  const [active, setActive] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const cacheRef = useRef({});
  useLayoutEffect(() => {
    props.getListOfMovies();
    return () => {}
  }, []);
  useEffect(() => {
    if (active !== null && !cacheRef.current[active]) {
      props.getQuotesOfMovies(active);
    } else {
      setSelectedData(cacheRef.current[active]);
    }
    return () => {}
  },[active]);
  useEffect(() => {
    if (props.movieQuotes.status === 2) {
      cacheRef.current[props.movieQuotes.data.id] = props.movieQuotes.data.docs;
      setSelectedData(cacheRef.current[active]);
    }
    return () => { }
  }, [props.movieQuotes.status]);
  const handleSetActive = (e) => {
    const selected = e.currentTarget.getAttribute('data-id');
    setActive(active => active === selected ? null : selected);
  };
  const cards = props.movies.status === 2 && props.movies.data.docs.map(item => (
    <Card
      key={item._id}
      data={item}
      onClick={handleSetActive}
      selected={active===item._id}
    />
  ));
  const selectedComponent = useMemo(() => <QuotesSection movieQuotes={props.movieQuotes} selectedData={selectedData} />);
  return (
    <React.Fragment>
      <Container>
        <div>
         {cards}
        </div>
        {active && selectedComponent}
      </Container>
    </React.Fragment>
  )
};
export default BodySection;