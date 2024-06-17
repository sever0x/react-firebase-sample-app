import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import WriteComponentContainer from './pages/create/containers/WriteComponentContainer';
import {store} from "./misc/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/create" element={<WriteComponentContainer />} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
