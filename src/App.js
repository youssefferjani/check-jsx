import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import FullName from './components/FullName';
import Adress from './components/Adress';



function App() {
  return (
    <div className="App">
     <Navbar />
     <FullName/>
     <Adress/>
     <div>
      <img src='youssef.jpg'>
      </img>
     </div>
    </div>
  );
}

export default App;
