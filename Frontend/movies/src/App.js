import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import FilmsList from './components/FilmsList.js'


export class App extends React.Component {
    render() {
        return <FilmsList />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

