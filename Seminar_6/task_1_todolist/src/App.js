import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css'
import { FilterProvider } from './contexts/FilterContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
  return (
    <div className='container'>
      <Provider store={store}>
        <FilterProvider>
          <h1>To-Do List</h1>
          <AddTodo />
          <TodoList />
          <TodoFilter />
        </FilterProvider>
      </Provider>
    </div>
  );
}

export default App;