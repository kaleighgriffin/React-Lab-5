import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';
import { StoryContextProvider } from './context/StoryContext';
import ListStories from './components/ListStoriesRoute';
import CreateStory from './components/CreateStoryRoute';
import ViewStory from './components/ViewStoryRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <StoryContextProvider>
          <nav>
            <h1>GC Mad Libs</h1>
            <NavLink to="/stories" exact>See Saved Stories</NavLink> {' '}
            <NavLink to="/create-story">Create a New Story</NavLink>
          </nav>
          <switch>
            <Route path="/stories" exact>
              <ListStories />
            </Route> 
            <Route path="/create-story">
              <CreateStory />
            </Route>
            <Route path="/story/:id">
              <ViewStory />
            </Route>
          </switch>
        </StoryContextProvider>
      </Router>
    </div>
  );
}

export default App;