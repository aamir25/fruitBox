import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from './reducers';

// Components
import App from './components/App';	
import Home from './components/home/Home';
import Fruits from './components/fruits/Fruits';
import Cakes from './components/cakes/Cakes';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Cart from './components/cart';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, promise, logger));

ReactDOM.render((
				<Provider store={store}>
					<Router history={browserHistory}>
						<Route path="/" component={App}>
							<IndexRoute component={Home} />
							<Route path="/fruits" component={Fruits} />
							<Route path="/cakes" component={Cakes} />
						</Route>
						<Route path="/signUp" component={SignUp} />
						<Route path="/signIn" component={SignIn} />
						<Route path="/cart" component={Cart} />
					</Router>
				</Provider>
				), document.getElementById('fh5co-page'))