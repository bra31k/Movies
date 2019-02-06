import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import {store} from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilmsList from "./containers/FilmsList";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={FilmsList} />
                <Route path="/:filter" component={FilmsList} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();

