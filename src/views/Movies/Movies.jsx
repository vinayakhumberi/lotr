import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header';
import { getListOfMovies, getQuotesOfMovies } from '../../actions/lotrActions';
import BodySection from './Aggregates/BodySection';

function Movies(props) {
  console.log(props);
  return(
    <React.Fragment>
      <Header logo="LOTR" type="movies" />
      <BodySection
        movies={props.movies}
        movieQuotes={props.movieQuotes}
        getListOfMovies={props.getListOfMovies}
        getQuotesOfMovies={props.getQuotesOfMovies}
      />
    </React.Fragment>
  )
}
const mapStateToProps = state => ({
  movies: state.lotrReducer.movies,
  movieQuotes: state.lotrReducer.movieQuotes
})

const mapDispatchToProps = dispatch => ({
  getListOfMovies: () => dispatch(getListOfMovies()),
  getQuotesOfMovies: (id) => dispatch(getQuotesOfMovies(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));

