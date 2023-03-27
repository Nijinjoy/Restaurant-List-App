
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Restaurantlist from './components/Restaurantlist';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <Header/>
      </header>
      <Restaurantlist/>
      <Footer/>
    </div>
  );
}

export default App;