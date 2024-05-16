import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [prison, setPrison] = useState('');

  const handleSave = () => {
    // Logic to save data
    console.log('Data saved:', { name, status, prison });
  };

  const handleCancel = () => {
    // Logic to cancel input
    setName('');
    setStatus('');
    setPrison('');
  };

  return (
    <div className="container">
      <h1 className="header">Add New Cell <span className="add-icon">+</span></h1>
      <div className="form">
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="prison">Prison:</label>
          <input
            type="text"
            id="prison"
            value={prison}
            onChange={(e) => setPrison(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default App;
