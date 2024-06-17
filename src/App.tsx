import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import WriteComponentContainer from './pages/create/containers/WriteComponentContainer';
import {store} from "./misc/store";
import pagesURLs from "./constants/pagesURLs";
import * as pages from "./constants/pages";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Routes>
                        {/*todo re-impl other components as containers */}
                        <Route path={`${pagesURLs[pages.create]}`} element={<WriteComponentContainer />} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
