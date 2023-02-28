import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import  store from "./utils/store"

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
