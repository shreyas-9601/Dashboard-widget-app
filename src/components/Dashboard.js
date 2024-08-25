import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import AddWidgetForm from './AddWidgetForm';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = useSelector(state => state.dashboard.categories);

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search Widgets..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {filteredCategories.map(category => (
        <Category key={category.id} category={category} />
      ))}
      <AddWidgetForm />
    </div>
  );
};

export default Dashboard;
