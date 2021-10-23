import logo from './logo.svg';
import './App.css';
import naruto from '../src/imgs/naruto.jpeg'
import Quotes from './components/Quotes';
import Button from './components/Button';

function App() {
  return (
    <>
    
   <p role='show'>hello</p>
   <img src={naruto} alt='imagem' width='100%' height='50%'/>
   <Button>click</Button>
   
   </>
  );
}



export default App;
