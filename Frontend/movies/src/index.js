import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter, Router, Route } from 'react-router-dom';
import {store} from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import MainLayout from './containers/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from "./containers/SideNav";


ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
              <div>
                  <MainLayout>
                      <SideNav/>
                      <Route path="/:filter" component={App} />
                      <Route path="/" exact={true} component={App} />
                  </MainLayout>
              </div>
          </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();

