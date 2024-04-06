
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage.jsx/HomePage';
import Footer from './customer/components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
    <div>
      <HomePage/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
