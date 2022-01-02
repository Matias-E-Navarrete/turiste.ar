import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { EmptyComponent } from './components/EmptyComponent/EmptyComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/"
            element={
              <Home />
            } />

          <Route exact path="/cart"
            element={ <EmptyComponent /> }
          />


          <Route exact path="/contact"
            element={ <EmptyComponent /> }
          />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
