import React from 'react'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Adminlayot from './Layoutes/AdminLayot';
import Login from './Login/Login';
import Conusturuktor from './Conusturuktor/Conusturuktor';
import Home from './Companents/Home/Home';
import Protected from './Routes/PratectetRoute/Protected';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
      <Route path='Login' element={<Login />} />
      <Route path='/' element={<Adminlayot />}>
         <Route index path='/' element={
           <Protected>
             <Home />
           </Protected>
         }/>
      </Route>
      <Route path='/Conusturuktor' element ={ <Conusturuktor />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
