import React from 'react';
import Header from '../../components/Header';
import {
  Container
} from './styles/style';
const Home = function () {
  return (
    <div>
      <Header logo="LOTR" />
      <Container>
        <pre>
          {`There are 2 Sections
          
1. Characters
2. Movies

You can Navigate between them using top navbar
The routes for these is kept in "config/config.routes.js".

I have just kept 1 reducer & action file, ideally the reducers & actions will be split based on the Use case.

Components folder as such hold our "Pure Components" whose sole and whole purpose is take some input
and provide a view.

The pageviews have been kept under "View" folder here you will notice 2 Folders for now styles & Aggregates.

Aggregates contain compoments which are a combination of 2 or more Components. 

Taking Example of Characters View

It fetches all Characters on page load. i.e when "ChracterSection Component is mounted"
This Component also has inbuilt features to sort & search the list. (If it would
have filters then they would have went here.
In that case it would be great to break the filters component to one more aggregate).

The results of the characters are paginated. This helps react & DOM to render faster as
no of HTML nodes are reduced.

On Clicking on any Character a characters quotes are fetched from the server (for the first time)
and are displayed using "QuotesSection" Component.
The response on this is cached within the Character Component so next time a user clicks on the
same characters the
data is fetch from the cache not the server.

The view built for quotes is also memoized use React memo thus even React doesnt need to reprocess
the view. It can just use it from the cache.

I have opted to go with styled components which provide a slight edge interms of rendering over sass or css.

Movie Part of the page is just for route demonstration. Provide it also follows if not all some
of the above core internal features.

`}         
        </pre>
      </Container>
    </div>
  )
};
export default Home;

