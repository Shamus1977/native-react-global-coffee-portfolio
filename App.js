import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import Main from './components/MainComponent';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

const store = ConfigureStore();

export default function App() {
    return (
        <Provider store={store} >
            <Main />
        </Provider>
    );
}

