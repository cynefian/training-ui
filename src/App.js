import React from 'react';
import './App.css';
import LocationTable from './components/LocationTable';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Device Data</h1>
                <LocationTable />
            </header>
        </div>
    );
}

export default App;
