import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer greeting='Greeting' />
    </div>
  );
}

export default App;
