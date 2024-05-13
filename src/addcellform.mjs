import React from 'react';
import './addcellform.css'; // Import the CSS file

const AddCellForm = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Active');
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'status') {
      setStatus(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Name:', name);
    console.log('Status:', status);
    setName('');
    setStatus('Active');
  };

  return (
    <div className="add-cell-form">
      <h3>Add New Cell</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <div className="button-container">
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddCellForm;