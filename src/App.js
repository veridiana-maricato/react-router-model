import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';


// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <SearchForm />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={<Product />} />

        {/* nested route */}
        <Route path='/products/:id/info' element={<Info />} />

        {/* search page */}
        <Route path='/search' element={<Search />} />
        {/* redirect */}
        <Route path='/company' element={<Navigate to='/about' />} />

        {/* no match route */}
        <Route path='*' element={<NotFound />} />
      </Routes>      
      </BrowserRouter>
      <footer>
        <h1>footer</h1>
      </footer>

    </div>
  );
}

export default App;
