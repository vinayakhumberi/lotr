import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import BodySection from './Aggregates/BodySection';
import { getListOfCharacters, getQuotesOfCharacters } from '../../actions/lotrActions';

const Characters = function (props) {
  return (
    <React.Fragment>
      <Header logo="LOTR" type="characters" />
      <BodySection
        characters={props.characters}
        characterQuotes={props.characterQuotes}
        getListOfCharacters={props.getListOfCharacters}
        getQuotesOfCharacters={props.getQuotesOfCharacters}
      />
    </React.Fragment>
  )
};

const mapStateToProps = state => ({
  characters: state.lotrReducer.characters,
  characterQuotes: state.lotrReducer.characterQuotes
})

const mapDispatchToProps = dispatch => ({
  getListOfCharacters: () => dispatch(getListOfCharacters()),
  getQuotesOfCharacters: (id) => dispatch(getQuotesOfCharacters(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Characters));

