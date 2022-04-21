// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {Routes,Route} from 'react-router-dom'
import About from './components/About/About';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>This is App Components</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/meal-details/:mealId' element={<MealDetails></MealDetails>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
