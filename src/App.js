import './App.css';
import AuthorFilter from './components/AuthorFilter'
import Books from './components/Bookshop'
import Counter from './components/Counter'
import WindowWith from "./components/WindowWith";
import GenreFilter from "./components/GenreFilter";

function App() {

  return (
    
    <div className="App">
      <h1>Bookshop</h1>
      <AuthorFilter/>
      {/* <GenreFilter/> */}
      <Books/>
    </div>
  );
}

export default App;
