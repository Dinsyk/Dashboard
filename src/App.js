
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Diagram from './Components/Diagram/Diagram';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
       <Routes>
       <Route path='/' element={<Home/>}></Route> 
      <Route path='/diagram' element={<Diagram/>}></Route>
     </Routes>
    </>
  );
}

export default App;
