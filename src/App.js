import './App.css';
import Form from './Form/Form';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Navsec/home';
import ToDo from './Todo/Todo';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Form/>}></Route>
       <Route path='home' element={<Home/>}></Route>
       <Route path='/todo' element={<ToDo/>}></Route>
          
      
       </Routes>
      </BrowserRouter>
      
      
     
    </div>
  );
}

export default App;
