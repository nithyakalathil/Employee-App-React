import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addemployee from './components/Addemployee';
import Viewall from './components/Viewall';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<Addemployee/>}/>
  <Route path='/v' element={<Viewall/>}/>
</Routes>
  </BrowserRouter>

  );
}

export default App;
