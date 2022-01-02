import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { EmptyComponent } from './components/EmptyComponent/EmptyComponent';
import { navbarRoutes } from './utils/navbar.routes';

function App() {
  const getRoutes = (routes) => routes.map((navRoute) => {
    return <Route exact path={navRoute.route}
      element={
        navRoute.page
      } />
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {
            getRoutes(navbarRoutes)
          }
          <Route exact path="/cart"
            element={<EmptyComponent />}
          />
          <Route exact path="/user-profile"
            element={<EmptyComponent />}
          />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
