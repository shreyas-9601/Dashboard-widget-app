import data from '../../data/data.json';

const initialState = {
  categories: data.categories
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [
                  ...category.widgets,
                  {
                    id: Date.now(),
                    name: action.payload.name,
                    text: action.payload.text
                  }
                ]
              }
            : category
        )
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  widget => widget.id !== action.payload.widgetId
                )
              }
            : category
        )
      };
    default:
      return state;
  }
};

export default dashboardReducer;
