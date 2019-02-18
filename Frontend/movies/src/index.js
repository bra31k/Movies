import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import {store} from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import MainLayout from './containers/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from "./containers/SideNav";
import FilmsList from "./containers/FilmsList"
import SeachNav from "./containers/SeachNav";



ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
              <div>
                  <MainLayout>
                      <SeachNav/>
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

