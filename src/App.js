
import {React} from 'react';
import './App.css';
import { Navbar } from './componentset/navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home} from './componentset/pages/home';
import {Service} from './componentset/pages/service';
import {Contact} from './componentset/pages/contact';
import {About} from './componentset/pages/about';
function App() {
  return (
   <div className='App'>
   <Router>
<Routes>

   <Route path="/" Component={Home} />
   <Route path="/Contact" Component={Contact} />
   <Route path="/Service" Component={Service} />
   <Route path="/About" Component={About} />
      
   </Routes>
   </Router>
   
    </div>
  );
}

export default App;
