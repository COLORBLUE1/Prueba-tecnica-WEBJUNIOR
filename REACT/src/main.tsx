
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { Provider } from "react-redux";
import  store  from "./assets/redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    {/* <Appl /> */}
  </Provider>
);