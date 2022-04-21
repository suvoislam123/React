import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contract from './components/Contract/Contract';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import User from './components/User/User';
import FriendDetails from './components/FriendDetail/FriendDetails';
import Posts from './components/Posts/Posts';
import Postdetails from './components/PostDetails/Postdetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contract' element={<Contract />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/posts' element={<Posts/>}>
          <Route path='/posts/:postId' element={<Postdetails />}></Route>
        </Route>
        <Route path='/users' element={<User/>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetails/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
