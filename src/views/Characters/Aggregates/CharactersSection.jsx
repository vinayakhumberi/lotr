import React, { useLayoutEffect, useState, useEffect, useRef, useMemo } from 'react';
import Card from '../../../components/CharacterCard';
import QuotesSection from './QuotesSection';

import {
  Container,
  Input,
  Button
} from '../styles/style';

function CharactersSection(props) {
  const [characters, setCharacterData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [offset, setOffsetData] = useState(1);
  const limit = 10;
  const [sort, setSort] = useState('asc');
  useLayoutEffect(() => {
    props.getListOfCharacters();
    return () => { }
  }, []);
  useEffect(() => {
    if (props.characters.status === 2) {
      setCharacterData(props.characters.data.docs);
    }
    return () => {
    };
  }, [props.characters.status]);
  useEffect(() => {
    if (props.characters.status === 2) {
      if (searchText.length > 1) {
        const newCharacters = props.characters.data.docs.filter(item => item.name.toLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1);
        if (sort === 'dsc') {
          newCharacters.reverse();
        }
        setCharacterData(newCharacters);
      } else {
        setCharacterData(props.characters.data.docs);
      }
    }
  }, [searchText]);

  const handleSetActive = (e) => {
    const selected = e.currentTarget.getAttribute('data-id');
    props.handleSetActive(props.active === selected ? null : selected );
  };
  const handleLoadMore = () => {
    setOffsetData(offset => offset + 1);
  };
  const handleSort = () => {
    setCharacterData(characters => {
      const n = [...characters];
      return n.reverse();
    });
    setSort(sort => sort === 'dsc' ? 'asc' : 'dsc');
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const cards = characters.length > 0 && characters.slice(0, offset * limit).map(item => (
    <Card
      key={item._id}
      data={item}
      onClick={handleSetActive}
      selected={props.active === item._id}
    />
  ));
  return (
    <React.Fragment>
      <div>
        <div>
          <Input type="text" value={searchText} onChange={handleSearch} placeholder="Try a name, Ex: Gandalf" />
          <Button onClick={handleSort}>
            Sort ({sort})
          </Button>
        </div>
        <div>
          {cards}
          {props.characters.status === 2 && characters.length > (offset * limit) && <Button onClick={handleLoadMore}>
            load more
          </Button>}
        </div>
      </div>
    </React.Fragment>
  )
};
export default CharactersSection;