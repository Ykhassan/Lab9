import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './components/Home';
import RecipeCard from './components/RecipeCard';
import About from './components/About';
function App() {
  return (
   <BrowserRouter>
    <div className='container'>
      <NavigationBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/recipesdetails/:id' element={<RecipeCard />}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
   </BrowserRouter>
  );
}

export default App;
