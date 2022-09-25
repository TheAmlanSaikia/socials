import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import { Navbar } from "./Components/Index";
import { Home } from "./Pages/Index";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
