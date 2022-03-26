import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog/Blog';
import Battery from './components/Battery/Battery';
import API from './components/API/API';

function App() {
  return (
    <div className="App">
      <article>
        <h1 style={{color:'red',backgroundColor:'green'}}>Amazing Shuvo Islam doing programming</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut soluta aspernatur repellat blanditiis harum alias commodi ipsam repudiandae consectetur, suscipit, repellendus autem provident nulla eius maxime magni mollitia inventore beatae.</p>
      </article>
      <Blog author={'Shuvo Islam'}
      heading={'He is a greate Man'}
      />
      <Blog author={'Shawon Sheikh'}
      heading={'He is a greate Man'}
      />
      <Blog author={'Shaiful Sheikh'}
      heading={'He is a greate Man'}
      />
      <Battery />
      <API />
    </div>
  );
}

export default App;
