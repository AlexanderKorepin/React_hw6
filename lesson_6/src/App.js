import React from 'react';
import { Provider } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { FilterProvider } from "./contexts/FilterContext";
import store from './store';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <FilterProvider>
          <AddTodo />
          <TodoList />
          <TodoFilter />
        </FilterProvider>
      </Provider>
    </div>
  );
}

export default App;