import './App.css';
import appRouter from './router/index.router';
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div>
  <RouterProvider router={appRouter} />
      
    </div>
  );
}

export default App;
