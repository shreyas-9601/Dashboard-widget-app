import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddWidgetForm = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (name && text && categoryId) {
      dispatch({
        type: 'ADD_WIDGET',
        payload: { name, text, categoryId: parseInt(categoryId) }
      });
      setName('');
      setText('');
      setCategoryId('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-widget-form">
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <select
        value={categoryId}
        onChange={e => setCategoryId(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="1">CSPM Executive Dashboard</option>
        <option value="2">Security Overview</option>
      </select>
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
