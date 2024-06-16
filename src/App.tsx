import React from 'react';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import WriteComponent from "./components/WriteComponent";
import ReadComponents from "./components/ReadComponents";
import UpdateComponent from "./components/UpdateComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<ReadComponents/>}/>
                    <Route path="/create" element={<WriteComponent/>}/>
                    <Route path="/update/:itemId" element={<UpdateComponent/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
