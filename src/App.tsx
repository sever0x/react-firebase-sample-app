import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import WriteComponentContainer from './pages/create/containers/WriteComponentContainer';
import {store} from "./misc/store";
import pagesURLs from "./constants/pagesURLs";
import * as pages from "./constants/pages";
import ReadComponentsContainer from "./pages/read/containers/ReadComponentsContainer";
import UpdateComponentContainer from "./pages/update/containers/UpdateComponentContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path={`${pagesURLs[pages.defaultPage]}`} element={<ReadComponentsContainer/>}/>
                        <Route path={`${pagesURLs[pages.create]}`} element={<WriteComponentContainer/>}/>
                        <Route path={`${pagesURLs[pages.update]}/:componentId`} element={<UpdateComponentContainer/>}/>
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
