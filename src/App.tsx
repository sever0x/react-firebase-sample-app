import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import WriteNewComponent from "./components/WriteNewComponent";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<WriteNewComponent/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
