import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/Home/RequireAuth';
import ServiceDetail from './Pages/Home/Service/ServiceDetail';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={
      <RequireAuth>
        <Home></Home>
      </RequireAuth>
      
      }></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
