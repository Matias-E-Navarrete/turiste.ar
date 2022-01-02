import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { EmptyComponent } from './components/EmptyComponent/EmptyComponent';
import { routes } from './utils/routes.routes';

function App() {
  const getRoutes = (routes) => routes.map((route, key) => {
    return <Route key={key} exact path={route.route}
      element={
        route.page
      } />
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {
            getRoutes(routes)
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
