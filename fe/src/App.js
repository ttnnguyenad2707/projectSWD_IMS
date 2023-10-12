import './App.css';
import { RouterProvider } from 'react-router-dom'
import appRouter from './router/index.router';

function App() {
  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;
