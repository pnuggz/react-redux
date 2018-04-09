import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';
import ContestList from './components/ContestList';

const store = configureStore();

render(
    <Provider store={store}>
        <div>
            <ItemList />
            <ContestList />
        </div>
    </Provider>,
    document.getElementById('app')
);
