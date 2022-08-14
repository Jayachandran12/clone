import './App.css';
import LoginPage from './Components/Auth/Login';
import HomePage from './Components/Home/Home';

function App() {
  return (
    <div className="App">

      {
          (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null)?
          <LoginPage/> : <HomePage/>
      }
    </div>
  );
}

export default App;
