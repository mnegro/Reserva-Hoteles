import Header from '../components/Header/Header'
import Filter from './../components/Filter/Filter'
import Cards from '../components/Cards/Cards'
import './App.css';

function App() {
  return (
    <div className="App">
  
     <div className="container">
        <header className="header">
            <Header />
        </header>
     </div>
     <div className="filter">
          <Filter />
     </div>
     <div className="result">
          <Cards />
     </div>

    </div>
  );
}

export default App;
