import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

const API_KEY ='AIzaSyBI6_unAZRVQhnsl-Oehmk9nh2LjLdhk9E';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos:[]};

    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      this.setState({videos})
    });
  }
  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;