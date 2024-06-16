import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import WriteNewComponent from "./components/WriteNewComponent";
import ReadComponents from "./components/ReadComponents";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<WriteNewComponent/>}/>
                    <Route path="/read" element={<ReadComponents/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
