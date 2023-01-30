import './App.css';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';

function App() {
  return (
    <div classNameName="App">
      <>
        <Header/>
        <Todos/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
