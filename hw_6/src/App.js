
import "./App.css";
import Form from "./components/Form/Form";
import ProductsList from "./components/ProductsList/ProductsList";
import { Provider } from "react-redux";
import store from "./redux/store/Store";



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;