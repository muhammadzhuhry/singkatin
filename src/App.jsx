import './styles.css';
import ShortenUrl from './components/ShortenUrl';
import RedirectPage from './components/RedirectPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ShortenUrl />} />
        <Route path='/redirect/:shortenedUrl' element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
