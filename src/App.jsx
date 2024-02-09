import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Viewdoc from './componets/Viewdoc';
import Cover from './componets/Cover';

function App() {
  return (
    <div className="img ">
      <header>
        <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Cover/>}/>
        <Route path='/view/:id'element={<Viewdoc/>}/>

      </Routes>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
