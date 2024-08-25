import React from 'react';
import { useDispatch } from 'react-redux';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch({
      type: 'REMOVE_WIDGET',
      payload: { categoryId, widgetId: widget.id }
    });
  };

  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={handleRemove}>✖</button>
    </div>
  );
};

export default Widget;
