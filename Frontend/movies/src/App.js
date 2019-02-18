import React from 'react';
import './App.css';
import FilmsList from './containers/FilmsList.js'

export class App extends React.Component {
    render() {
        return <FilmsList page={this.props.match.params.filter}/>
  }
}

export default App;



