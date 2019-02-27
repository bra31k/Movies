import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import {store} from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import MainLayout from './components/MainLayout'
import SideNav from "./containers/SideNav";
import FilmsList from "./containers/FilmsList"
import SearchNav from "./containers/SearchNav";


ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
              <div className="container">
                  <MainLayout>
                      <SearchNav/>
                      <SideNav/>
                      <Route path="/" exact={true} component={FilmsList} />
                      <Route path="/:genre" exact={true} component={FilmsList} />
                      <Route path="/:genre/:page" component={FilmsList} />
                  </MainLayout>
              </div>
          </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();

