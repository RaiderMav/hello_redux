import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store'

const reRender = () => {
    return render(
        <App />, document.getElementById("root")
    );
}
store.subscribe(reRender)
reRender()
registerServiceWorker();


