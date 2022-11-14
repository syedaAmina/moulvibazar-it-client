import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Route';

function App() {
  return (
    <div className="App" id="pageToDownLoad">
    <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
