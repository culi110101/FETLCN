import './App.css';
import { BrowserRouter } from 'react-router-dom';
import './assets/sass/main.scss';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
